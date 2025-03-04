import { Modal, type ModalConfig } from '@arco-design/web-vue'
import { h } from 'vue'
import { map } from 'lodash-es'

export async function awaitDelay(promise: any, time = 500) {
  const start = new Date().getTime()
  await promise
  const end = new Date().getTime()
  const diff = end - start
  const delay = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time))
  if (diff < time) {
    await delay(time - diff)
  }
}

export async function removeConfirm(items: string[]) {
  const lines = map(items, (item) =>
    h(
      'div',
      { class: 'remove-confirm-line' },
      map(item, (word) => h('span', { class: 'remove-confirm-word' }, word))
    )
  )
  const wrap = h('div', { class: 'remove-confirm-wrap' }, lines)
  const tip = h(
    'div',
    { style: 'margin-bottom:10px' },
    `共 ${items.length} 条数据，是否移除？`
  )
  return await confirm({
    content: () => h('div', {}, [tip, wrap]),
    okText: '移除',
    cancelText: '取消',
  })
}

export function confirm(config: ModalConfig) {
  const { title, titleAlign, content, okText, cancelText } = config
  return new Promise((resolve) => {
    Modal.open({
      simple: true,
      title: title || '系统提醒:',
      titleAlign: titleAlign || 'start',
      content: content || '你确定要这么做吗?',
      alignCenter: true,
      okText: okText || '确认',
      width: 300,
      cancelText: cancelText || '取消',
      modalStyle: { padding: '15px 32px 15px' },
      onOk: () => resolve(true),
      onCancel: () => resolve(false),
    })
  })
}
