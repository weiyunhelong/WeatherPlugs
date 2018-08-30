// plugin/components/weatherpostion/index.js
/*测试数据的接口*/
var testdata = require('../../api/testdata.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        this.setData({
          backimg: newVal.backimg,//背景图
          backcolor: newVal.backcolor,//背景颜色
          fontcolor: newVal.fontcolor,//字体颜色
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lat: 0, //经纬度
    lng: 0, //经纬度
    nowweather: {}, //当前的天气
    dayweather: [], //未来24的天气
    weekweather: [], //未来一周的天气
    backimg: "",//背景图
    backcolor: "",//背景颜色
    fontcolor: "",//字体颜色
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached: function () {
    var that = this;
    //获取手机的信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winheight: res.windowHeight
        })
      },
    })
    //获取定位信息
    wx.getLocation({
      success: function (res) {
        console.log("获取经纬度的值:");
        console.log(res);
        //赋值位置数据
        that.setData({
          lat: res.latitude, //经纬度
          lng: res.longitude, //经纬度
        })
        that.getnowweather(); //获取当前的天气
        that.getdayweather(); //获取未来24小时的天气
        that.getweekweather(); //获取未来一周的天气
      },
      fail: function () {
        wx.showToast({
          title: '请获取微信定位',
          mask: true,
          duration: 2000,
          icon: "none"
        })
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //获取当前的天气
    getnowweather: function () {
      var that = this;
      //参数部分
      var lat = that.data.lat, //经纬度
        lng = that.data.lng; //经纬度

      //获取当前的天气
      var nowweatherdata = {
        "cond_code": "101",
        "cond_txt": "多云",
        "fl": "16",
        "hum": "73",
        "pcpn": "0",
        "pres": "1017",
        "tmp": "14",
        "vis": "1",
        "wind_deg": "11",
        "wind_dir": "北风",
        "wind_sc": "微风",
        "wind_spd": "6"
      };
      //当前的天气 
      var nowweather = {
        icon: "../../weather/" + nowweatherdata.cond_code + ".png", //图标
        tmp: nowweatherdata.tmp, //温度
        date: testdata.getNowdate(), //当天日期
        week: testdata.getNowdayWeek(), //当天周几,
        weather: nowweatherdata.cond_txt, //天气
        max: "20",
        min: '12'
      };

      console.log("当天的天气数据:");
      console.log(nowweather);
      that.setData({
        nowweather: nowweather
      })
    },
    //获取未来24的天气
    getdayweather: function () {
      var that = this;
      //参数部分
      var lat = that.data.lat, //经纬度
        lng = that.data.lng; //经纬度

      //得到当前的日期
      var date = new Date();
      var hour = date.getHours();
      console.log("未来24小时:");
      console.log(hour);
      //获取当前的天气
      var nowweather = that.data.nowweather;
      var dayweatherone = {
        "tmp": nowweather.tmp,
        "time": "现在",
        "icon": nowweather.icon, //图标
      };
      var dayweather = [];
      dayweather[0] = dayweatherone;

      //获取未来的天气
      var hourdata = testdata.gethourdata().hourly;
      console.log("未来24小时数据:");
      console.log(hourdata);

      for (var i = 1; i < 9; i++) {
        dayweather[i] = {
          "tmp": hourdata[i - 1].tmp,
          "time": that.gettime(i - 1) + "-" + that.gettime(i),
          "icon": "../../weather/" + hourdata[i - 1].cond_code + ".png", //图标
        }
      }

      console.log("未来24小时的天气数据:");
      console.log(dayweather);
      that.setData({
        dayweather: dayweather
      })
    },
    //获取未来一周的天气
    getweekweather: function () {
      var that = this;
      //参数部分
      var lat = that.data.lat, //经纬度
        lng = that.data.lng; //经纬度

      var weekweather = [];
      //获取未来一周的天气
      var weekdata = testdata.getweekdata().grid_forecast;
      console.log("未来一周的天气数据:");
      console.log(weekdata);
      var index = 0;//下标
      for (var i = 1; i < 8; i++) {
        weekweather[index] = {
          "maxtmp": weekdata[i - 1].tmp_max,
          "mintmp": weekdata[i - 1].tmp_min,
          "day": that.getday(i),
          "icon": "../../weather/" + weekdata[i - 1].cond_code_d + ".png", //图标
        }
        index++;
      }
      console.log("未来一周的天气:");
      console.log(weekweather);

      that.setData({
        weekweather: weekweather
      })
    },

    //获取未来时间的值
    gettime: function (n) {
      //得到当前的日期
      var date = new Date();
      var hour = date.getHours() + 1;
      var result = "";
      var temp = hour + 3 * n;
      if (temp >= 10 && temp < 24) {
        temp = temp;
      } else if (temp >= 24) {
        temp = temp - 24;
      } else if (temp < 10) {
        temp = temp;
      }
      if (temp < 10) {
        result = "0" + temp;
      } else {
        result = temp;
      }
      return result;
    },
    //获取未来一周的值
    getday: function (n) {
      //得到当前的日期    
      var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      var result = "";
      if (n == 1) {
        result = "明天";
      } else {
        var now = new Date();
        now.setDate(now.getDate() + n);
        var myddy = now.getDay();
        result = weekday[myddy];
      }
      return result;
    },
    //结束标识符 
  },
  //结束标识符 
})