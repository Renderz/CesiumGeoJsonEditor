// import Cesium from 'cesium';
import type { ViewerProps } from 'resium';

export const defaultCesiumViewerProps: ViewerProps = {
  animation: false, // 禁用动画控件
  baseLayerPicker: false, // 禁用底图切换控件
  contextOptions: {
    webgl: {
      alpha: true,
      antialias: true,
      depth: true,
      powerPreference: 'high-performance',
      stencil: true,
    },
  },
  creditContainer: document.createElement('div'),
  fullscreenButton: false, // 禁用全屏按钮
  geocoder: false, // 禁用地理编码器
  homeButton: false, // 禁用Home按钮
  // // @ts-expect-error
  // imageryProvider: new Cesium.SingleTileImageryProvider({
  //   tileHeight: 256,
  //   tileWidth: 256,
  //   url: 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==',
  // }),
  infoBox: false, // 禁用信息框
  navigationHelpButton: false, // 禁用帮助按钮
  navigationInstructionsInitiallyVisible: false, // 初始不显示导航说明
  orderIndependentTranslucency: false,
  requestRenderMode: false,
  scene3DOnly: true,
  sceneModePicker: false, // 禁用场景模式切换器
  selectionIndicator: false, // 禁用选择指示器
  shadows: false, // 禁用阴影
  shouldAnimate: true, // 启用动画
  timeline: false, // 禁用时间轴
};
