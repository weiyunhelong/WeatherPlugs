var plugin = requirePlugin("myPlugin")
Page({
  data: {
    weatherdata: {}
  },
  onLoad: function() {
    plugin.getData();

    var that = this;
    var weatherdata = {
      backimg: "", //背景图
      backcolor: "#ff8080", //背景颜色
      fontcolor: "#333", //字体颜色
    }

    that.setData({
      weatherdata: weatherdata
    })
  }
})