// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    previewText: 'Hello World',
    fontSize: '36rpx',
    fontColor: 'red',
    backgroundColor: 'black',
    fontSizeList: [
      {
        id: '32rpx',
        value: '小'
      },
      {
        id: '36rpx',
        value: '中'
      },
      {
        id: '40rpx',
        value: '大'
      },
      {
        id: '50rpx',
        value: '特大'
      }
    ]
  },
  onChange(e) {
    this.setData({ fontSize: e.detail.value });
  },
})
