// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    rollTitles: '',
    previewText: 'Hello World',
    fontSize: '36',
    fontColor: '#FF0000',
    backgroundColor: '#000000',
    showPreview: true,
    fontSizeList: [
      {
        id: '32',
        label: '小',
        value: 'small'
      },
      {
        id: '36',
        label: '中',
        value: 'middle'
      },
      {
        id: '40',
        label: '大',
        value: 'large'
      },
      {
        id: '50',
        label: '特大',
        value: 'extraBig'
      }
    ],
    fontColorList: [
      {
        id: '#FF0000',
        label: '红'
      },
      {
        id: '#FFFF00',
        label: '黄'
      },
      {
        id: '#00FF00',
        label: '绿'
      },
      {
        id: '#00FFFF',
        label: '青'
      },
      {
        id: '#0000FF',
        label: '蓝'
      },
      {
        id: '#FF00FF',
        label: '紫'
      },
      {
        id: '#000000',
        label: '黑'
      },
      {
        id: '#ffffff',
        label: '白'
      },
      {
        id: 'grey',
        label: '灰',
        value: '#C0C0C0'
      }
    ]
  },
  onSizeChange(e) {
    this.setData({ showPreview: false })
    this.setData({ fontSize: e.detail.value })
    this.setData({ showPreview: true })
  },
  onInputEnter (e) {
    this.setData({ showPreview: false })
    this.setData({ previewText: e.detail.value })
    this.setData({ showPreview: true })
  },
  onColorChange (e) {
    this.setData({ showPreview: false })
    this.setData({ fontColor: e.detail.value })
    this.setData({ showPreview: true })
  },
  onBackgroundColorChange (e) {
    this.setData({ showPreview: false })
    this.setData({ backgroundColor: e.detail.value })
    this.setData({ showPreview: true })
  },
  onResetClick () {
    this.setData({ showPreview: false })
    this.setData({ previewText: 'Hello World' })
    this.setData({ fontSize: '36' })
    this.setData({ rollTitles: '' })
    this.setData({ fontColor: '#FF0000' })
    this.setData({ backgroundColor: '#000000' })
    this.setData({ showPreview: true })
  },
  onPlayClick () {
    if (!this.data.rollTitles) {
      return wx.showToast({
        title: '请输入文字',
        icon: 'error'
      })
    }
    const data = {
      fontSize: this.data.fontSize,
      rollTitles: this.data.rollTitles,
      fontColor: this.data.fontColor,
      backgroundColor: this.data.backgroundColor
    }
    wx.navigateTo({
      url: '../play/play',
      success: function(res) {
        // 通过 eventChannel 向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', data)
      }
    })
  }
})
