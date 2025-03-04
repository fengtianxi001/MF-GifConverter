import { ref } from 'vue'
import { remove } from 'lodash-es'
import { Message } from '@arco-design/web-vue'
import { createBaseGifModal } from '@/components'
import { FileUtils, VideoUtils, removeConfirm } from '@/utils'
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

export function useScreen() {
  const items = ref<itemType[]>([])
  const selected = ref<string[]>([])
  const onAddItem = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
    })
    const blobs: any[] = []
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/mp4',
    })
    mediaRecorder.ondataavailable = (e) => {
      blobs.push(e.data)
    }
    mediaRecorder.start(100)
    mediaRecorder.onstop = async () => {
      const cache: any = new Blob(blobs)
      const url = URL.createObjectURL(cache)
      const video = await VideoUtils.getVideoObject(url)
      items.value.push({
        id: VideoUtils.getId(),
        url,
        name: '录像' + new Date().getTime(),
        size: FileUtils.formatSize(cache.size),
        type: 'mp4',
        dpi: { width: video.videoWidth, height: video.videoHeight },
        file: cache,
        duration: parseInt(video.duration * 10 + '') / 10,
        lastModified: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      })
      Message.success(`录像导入成功`)
    }
    // const list = await VideoUtils.chooser()
    // const packageItem = async (file: File): Promise<itemType> => {
    //   const url = URL.createObjectURL(file)
    //   const video = await VideoUtils.getVideoObject(url)

    //   return {
    //     id: VideoUtils.getId(),
    //     url,
    //     name: file.name,
    //     size: FileUtils.formatSize(file.size),
    //     type: file.type.split('/')[1],
    //     dpi: { width: video.videoWidth, height: video.videoHeight },
    //     file,
    //     duration: parseInt(video.duration * 10 + '') / 10,
    //     lastModified: dayjs(file.lastModified).format('YYYY-MM-DD HH:mm:ss'),
    //   }
    // }
    // const promiseList = list.map((file) => packageItem(file))
    // const result = await Promise.all(promiseList)
    // items.value.push(...result)
    // Message.success(`成功导入 ${result.length} 个视频`)
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
