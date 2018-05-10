Page({
  data: {
    array: ['北京通州万达七匹狼店', '北辰世纪中心A座', '京东科技'],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  addEquipment: function (e) {
    wx.scanCode({
      success: (res) => {
        console.log(res)
        wx.showModal({
          title: '提示',
          content: res.result,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  }
})
