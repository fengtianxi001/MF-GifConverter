import { Message } from '@arco-design/web-vue'
import gifshot from 'gifshot'
import { max } from 'lodash-es'
import { reactive, ref } from 'vue'

type GifConfigType = {
  // 动画 GIF 的期望宽度
  gifWidth: number
  // 动画 GIF 的期望高度
  gifHeight: number
  // 如果使用此选项，则将使用这些图像创建 GIF
  // 例如：['http://i.imgur.com/2OO33vX.jpg', 'http://i.imgur.com/qOwVaSN.png'],
  // 注意：确保这些图像资源支持 CORS 以防止任何跨源 JavaScript 错误
  // 注意：您还可以传递页面上现有图像元素的 NodeList
  images?: string[]
  // 如果使用此选项，则将使用适当的视频创建 GIF
  // HTML5 视频可以创建动画 GIF
  // 注意：检查对某些视频编码的浏览器支持，并选择适当的视频
  // 注意：您还可以传递页面上现有视频元素的 NodeList
  // 例如：'video': ['example.mp4', 'example.ogv'],
  video?: string[]
  // 您可以传递现有的视频元素以用于摄像头 GIF 创建过程，
  // 此视频元素不会被隐藏（在与 keepCameraOn 选项结合使用时非常有用）
  // 提示：将视频元素的高度和宽度设置为与您未来的 GIF 相同的值
  // 另一个提示：如果使用此选项，视频将不会暂停，目标 URL 不会被撤销，
  // 视频也不会从 DOM 中移除。您需要自己处理这个问题。
  webcamVideoElement?: HTMLElement
  // 是否希望用户的摄像头在 GIF 创建后保持开启
  // 注意：cameraStream 媒体对象将在 createGIF() 回调函数中传回给您
  keepCameraOn?: boolean
  // 期望的摄像头流媒体对象
  // 注意：传递现有的摄像头流将允许您在不再次请求用户权限的情况下创建另一个 GIF 和/或快照，
  // 如果您不使用 SSL
  cameraStream?: null
  // 将应用于图像的 CSS 滤镜（例如：blur(5px)）
  filter?: string
  // 捕获每帧的等待时间（以秒为单位）
  interval?: number
  // 开始捕获 GIF 的时间（以秒为单位，仅适用于 HTML5 视频）
  offset?: number
  // 用于创建动画 GIF 的帧数
  // 注意：每隔 100 毫秒捕获一帧视频，现有图像每毫秒捕获一帧
  numFrames?: number
  // 每帧停留的时间
  frameDuration?: number
  // 覆盖在动画 GIF 上的文本
  text?: string
  // 覆盖在动画 GIF 上的文本的字体粗细
  fontWeight?: string
  // 覆盖在动画 GIF 上的文本的字体大小
  fontSize?: string
  // 覆盖在动画 GIF 上的文本的最小字体大小
  // 注意：此选项仅在应用的文本被截断时适用
  minFontSize?: string
  // 是否调整动画 GIF 文本的大小以适应 GIF 容器
  resizeFont?: boolean
  // 覆盖在动画 GIF 上的文本的字体
  fontFamily?: string
  // 覆盖在动画 GIF 上的文本的字体颜色
  fontColor?: string
  // 覆盖在动画 GIF 上的文本的水平对齐方式
  textAlign?: string
  // 覆盖在动画 GIF 上的文本的垂直对齐方式
  textBaseline?: string
  // 覆盖在动画 GIF 上的文本的 X（水平）坐标
  // 仅在默认的 textAlign 和 textBaseline 选项不起作用时使用此选项
  textXCoordinate?: number
  // 覆盖在动画 GIF 上的文本的 Y（垂直）坐标
  // 仅在默认的 textAlign 和 textBaseline 选项不起作用时使用此选项
  textYCoordinate?: null
  // 提供当前图像当前进度的回调函数
  progressCallback?: (captureProgress: number) => void
  // 当当前图像完成时调用的回调函数
  completeCallback?: () => void
  // 在创建调色板时跳过的像素数。默认值为 10。减少会更好，但会更慢。
  // 注意：通过调整采样间隔，您可以在合理的时间内产生非常高质量的图像，或产生良好的图像。
  // 使用 1 的 sampleInterval，整个图像将在学习阶段使用，而使用 10，
  // 伪随机子集将被用作学习阶段的 1/10 像素。采样因子为 10 可显著加快速度，同时有小幅质量损失。
  sampleInterval?: number
  // 用于处理动画 GIF 帧的 Web Workers 数量。默认值为 2。
  numWorkers?: number
  // 是否希望保存创建 GIF 的所有画布图像二进制数据
  // 注意：这在您希望稍后重新使用 GIF 添加文本时特别有用
  saveRenderingContexts?: boolean
  // 期望的画布图像数据数组
  // 注意：如果您设置 saveRenderingContexts 选项为 true，则会在 createGIF 回调函数中获取 savedRenderingContexts
  savedRenderingContexts?: number[]
  // 当请求使用现有图像或视频时，我们在请求上设置 CORS 属性。
  // 选项为 'Anonymous'、'use-credentials' 或者假值（如''）以不设置 CORS 属性。
  crossOrigin?: string
}

export function useGif(mode: 'image' | 'video', sources: any) {
  // pending=>未开始; ongoing=>进行中; unsaved=>未保存; saved=>已保存
  const stateCode = ref<'Pending' | 'Ongoing' | 'Unsaved' | 'Saved'>('Pending')
  const convertProgress = ref('0%')
  const convertResult = ref('')
  const aspect = ref(1)
  const config = []

  const form = reactive<GifConfigType>({
    gifWidth: 500,
    gifHeight: 500,
    numWorkers: 10,
  })
  // 计算最大的宽高
  const maxWidth = max(sources.map((item: any) => item.dpi.width)) as number
  const maxHeight = max(sources.map((item: any) => item.dpi.height)) as number

  aspect.value = maxWidth / maxHeight
  if (aspect.value > 1) {
    form.gifWidth = 500
    form.gifHeight = Math.floor(500 / aspect.value)
  } else {
    form.gifWidth = Math.floor(500 * aspect.value)
    form.gifHeight = 500
  }

  const configs = {
    gifWidth: {
      name: 'gifWidth',
      component: 'InputNumber',
      label: '宽度',
      unit: '像素',
      desc: '动画的期望宽度',
      props: {
        min: 1,
        onChange: (value: number) => {
          const height = value / aspect.value
          form.gifHeight = Math.round(height)
        },
        inputAttrs: {
          style: {
            textAlign: 'right',
          },
        },
      },
    },
    gifHeight: {
      name: 'gifHeight',
      component: 'InputNumber',
      label: '长度',
      unit: '像素',
      desc: '动图的期望高度',
      props: {
        min: 1,
        onChange: (value: number) => {
          const width = value / aspect.value
          form.gifWidth = Math.round(width)
        },
        inputAttrs: {
          style: {
            textAlign: 'right',
          },
        },
      },
    },
    frameDuration: {
      name: 'frameDuration',
      component: 'InputNumber',
      label: '每帧停留时间',
      unit: '秒',
      desc: '停留在每张图片上的时间',
      props: {
        min: 0,
        step: 0.1,
        inputAttrs: {
          style: {
            textAlign: 'right',
          },
        },
      },
    },
    numWorkers: {
      name: 'numWorkers',
      component: 'InputNumber',
      label: 'WebWorkers数量',
      unit: '个',
      desc: '用于处理动画帧的Workers数量',
      props: {
        inputAttrs: {
          style: {
            textAlign: 'right',
          },
        },
      },
    },
    numFrames: {
      name: 'numFrames',
      component: 'InputNumber',
      label: '时长',
      unit: '秒',
      desc: '用于创建动画GIF的帧数',
      props: {
        min: 0,
        max: 99,
        step: 0.1,
        inputAttrs: {
          style: {
            textAlign: 'right',
          },
        },
      },
    },
  }

  if (mode === 'image') {
    form.images = sources.map((item: any) => item.url)
    form.frameDuration = 0.1
    config.push(
      configs.gifWidth,
      configs.gifHeight,
      configs.frameDuration,
      configs.numWorkers
    )
  } else {
    const current = sources[0]
    form.video = sources.map((item: any) => item.url)
    form.numFrames = parseInt(current.duration * 0.86 * 10 + '') / 10
    configs.numFrames.props.max =
      parseInt(current.duration * 0.86 * 10 + '') / 10
    config.push(
      configs.gifWidth,
      configs.gifHeight,
      configs.numFrames,
      configs.numWorkers
    )
  }

  const onConvert = () => {
    stateCode.value = 'Ongoing'
    convertProgress.value = '0%'
    convertResult.value = ''

    const params = { ...form }
    if (params.frameDuration !== undefined) {
      params.frameDuration = params.frameDuration * 10
    } else if (params.numFrames !== undefined) {
      params.numFrames = params.numFrames * 10
    }
    params.progressCallback = (percent: number) => {
      convertProgress.value = (percent * 100).toFixed(2) + '%'
    }

    gifshot.createGIF(params, ({ image, error }: any) => {
      if (error) {
        stateCode.value = 'Pending'
        convertResult.value = ''
        convertProgress.value = '0%'
        Message.error(error)
      } else {
        stateCode.value = 'Unsaved'
        convertResult.value = image
        convertProgress.value = '100%'
        console.log('image', image)
      }
    })
  }

  const onSave = () => {
    const a = document.createElement('a')
    a.download = 'notitle.gif'
    a.href = convertResult.value
    a.click()
    stateCode.value = 'Saved'
  }

  return {
    config,
    aspect,
    stateCode,
    convertProgress,
    convertResult,
    form,
    onConvert,
    onSave,
  }
}

export default useGif
