import { createVNode, ref, render } from 'vue'
import { remove } from 'lodash-es'
import { Message } from '@arco-design/web-vue'
import { createBaseGifModal } from '@/components'
import { FileUtils, VideoUtils, removeConfirm } from '@/utils'
import Camera from './camera.vue'
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
  duration: number
}

export function useCamera() {
  const items = ref<itemType[]>([])
  const selected = ref<string[]>([])
  const onAddItem = async () => {
    const openModal = () => {
      return new Promise((resolve) => {
        const instance = createVNode(Camera, { resolve })
        const template = document.createElement('div')
        render(instance, template)
        const vnode = instance.el as HTMLElement
        document.body.appendChild(vnode)
      })
    }
    const blob: any = await openModal()
    // console.log('result', result)
    const url = URL.createObjectURL(blob)
    const video = await VideoUtils.getVideoObject(url)
    const result = {
      id: VideoUtils.getId(),
      url,
      name: '录像' + new Date().getTime(),
      size: FileUtils.formatSize(blob.size),
      type: 'mp4',
      dpi: { width: video.videoWidth, height: video.videoHeight },
      file: blob,
      duration: parseInt(video.duration * 10 + '') / 10,
      lastModified: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    }
    items.value.push(result)
  }
  const onRemoveItems = async (ids: string[]) => {
    const names = items.value
      .filter(({ id }) => ids.includes(id))
      .map(({ name }) => name)

    const result = await removeConfirm(names)
    if (!result) return void 0
    const removed = remove(items.value, ({ id }) => ids.includes(id))
    remove(selected.value, (id) => ids.includes(id))
    Message.success(`成功移除 ${removed.length} 个视频`)
    return void 0
  }
  const onConvertItems = async () => {
    const sources = items.value.filter(({ id }) => selected.value.includes(id))
    await createBaseGifModal('video', sources)
  }

  return {
    items,
    selected,
    onAddItem,
    onRemoveItems,
    onConvertItems,
  }
}
