// pages/postion/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var setstyle={
      backimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535636457188&di=4da4cfa7052692b4511d23f61f4bf52f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180211%2Fca639bf3f45447d6a2891d46ff83b44a.gif",//背景图
      backcolor: "",//背景颜色 #ff8080
      fontcolor: "#333",//字体颜色
    };
    that.setData({
      setstyle: setstyle
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})