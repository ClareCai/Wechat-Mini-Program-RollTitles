// pages/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playParams: {},
    showBtn: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      this.setData({ playParams: data })
    })
  },
  onViewClick () {
    this.setData({showBtn: !this.data.showBtn})
  },
  onBackClick () {
    wx.navigateBack()
  }
})