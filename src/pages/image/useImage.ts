import { ref } from 'vue'
import { remove } from 'lodash-es'
import { Message } from '@arco-design/web-vue'
import { createBaseGifModal } from '@/components'
import { FileUtils, ImageUtils, removeConfirm } from '@/utils'
import dayjs from 'dayjs'

export interface itemType {
  id: string
  url: string
  name: string
  size: string
  type: string
  dpi: { width: number; height: number }
  file: File
  lastModified: string
}

export function useImage() {
  const items = ref<itemType[]>([])
  const selected = ref<string[]>([])
  const onAddItem = async () => {
    const list = await ImageUtils.chooser()
    const packageItem = async (file: File): Promise<itemType> => {
      return {
        id: ImageUtils.getId(),
        url: URL.createObjectURL(file),
        name: file.name,
        size: FileUtils.formatSize(file.size),
        type: file.type.split('/')[1],
        dpi: await ImageUtils.getDpi(URL.createObjectURL(file)),
        file,
        lastModified: dayjs(file.lastModified).format('YYYY-MM-DD HH:mm:ss'),
      }
    }
    const promiseList = list.map((file) => packageItem(file))
    const result = await Promise.all(promiseList)
    items.value.push(...result)
    Message.success(`成功导入 ${result.length} 张图片`)
    //
  }
  const onRemoveItems = async (ids: string[]) => {
    const names = items.value
      .filter(({ id }) => ids.includes(id))
      .map(({ name }) => name)

    const result = await removeConfirm(names)
    if (!result) return void 0
    const removed = remove(items.value, ({ id }) => ids.includes(id))
    remove(selected.value, (id) => ids.includes(id))
    Message.success(`成功移除 ${removed.length} 张图片`)
    return void 0
  }
  const onConvertItems = async () => {
    await createBaseGifModal('image', items.value)
  }

  return {
    items,
    selected,
    onAddItem,
    onRemoveItems,
    onConvertItems,
  }
}
