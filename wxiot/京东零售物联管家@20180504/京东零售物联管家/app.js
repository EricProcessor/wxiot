//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function () {
        wx.getSetting({
          success(res) {
            if (!res.authSetting['scope.userInfo']) {
              wx.authorize({
                scope: 'scope.userInfo',
                success() {
                  // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        
                }
              })
            }
          }
        })
      },
      fail: function(){
      }
    });
  },
  globalData: {
    userInfo: null
  }
})