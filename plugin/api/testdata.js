//当前天气
var nowdata = {
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
//逐小时预报
var hourdata = {
  "hourly": [{
      "cloud": "8",
      "cond_code": "100",
      "cond_txt": "晴",
      "hum": "84",
      "pop": "0",
      "pres": "1018",
      "time": "2017-10-27 01:00",
      "tmp": "8",
      "wind_deg": "49",
      "wind_dir": "东北风",
      "wind_sc": "微风",
      "wind_spd": "2"
    },
    {
      "cloud": "8",
      "cond_code": "100",
      "cond_txt": "晴",
      "hum": "81",
      "pop": "0",
      "pres": "1018",
      "time": "2017-10-27 04:00",
      "tmp": "8",
      "wind_deg": "29",
      "wind_dir": "东北风",
      "wind_sc": "微风",
      "wind_spd": "2"
    },
    {
      "cloud": "6",
      "cond_code": "100",
      "cond_txt": "晴",
      "hum": "95",
      "pop": "0",
      "pres": "1019",
      "time": "2017-10-27 07:00",
      "tmp": "8",
      "wind_deg": "37",
      "wind_dir": "东北风",
      "wind_sc": "微风",
      "wind_spd": "2"
    },
    {
      "cloud": "2",
      "cond_code": "100",
      "cond_txt": "晴",
      "hum": "75",
      "pop": "0",
      "pres": "1018",
      "time": "2017-10-27 10:00",
      "tmp": "14",
      "wind_deg": "108",
      "wind_dir": "东南风",
      "wind_sc": "微风",
      "wind_spd": "3"
    },
    {
      "cloud": "0",
      "cond_code": "100",
      "cond_txt": "晴",
      "hum": "62",
      "pop": "0",
      "pres": "1016",
      "time": "2017-10-27 13:00",
      "tmp": "16",
      "wind_deg": "158",
      "wind_dir": "东南风",
      "wind_sc": "微风",
      "wind_spd": "6"
    },
    {
      "cloud": "0",
      "cond_code": "100",
      "cond_txt": "晴",
      "hum": "73",
      "pop": "0",
      "pres": "1016",
      "time": "2017-10-27 16:00",
      "tmp": "15",
      "wind_deg": "162",
      "wind_dir": "东南风",
      "wind_sc": "微风",
      "wind_spd": "6"
    },
    {
      "cloud": "3",
      "cond_code": "100",
      "cond_txt": "晴",
      "hum": "92",
      "pop": "0",
      "pres": "1018",
      "time": "2017-10-27 19:00",
      "tmp": "13",
      "wind_deg": "206",
      "wind_dir": "西南风",
      "wind_sc": "微风",
      "wind_spd": "4"
    },
    {
      "cloud": "19",
      "cond_code": "100",
      "cond_txt": "晴",
      "hum": "96",
      "pop": "0",
      "pres": "1019",
      "time": "2017-10-27 22:00",
      "tmp": "13",
      "wind_deg": "212",
      "wind_dir": "西南风",
      "wind_sc": "微风",
      "wind_spd": "1"
    }
  ],
}
//未来一周的天气
var weekdata = {
  "grid_forecast": [{
      "cond_code_d": "100",
      "cond_code_n": "101",
      "cond_txt_d": "晴",
      "cond_txt_n": "多云",
      "date": "2018-04-17",
      "tmp_max": "24",
      "tmp_min": "12",
      "wind_dir_d": "北风",
      "wind_dir_n": "北风",
      "wind_sc_d": "1-2",
      "wind_sc_n": "1-2"
    },
    {
      "cond_code_d": "100",
      "cond_code_n": "101",
      "cond_txt_d": "晴",
      "cond_txt_n": "多云",
      "date": "2018-04-18",
      "tmp_max": "26",
      "tmp_min": "14",
      "wind_dir_d": "北风",
      "wind_dir_n": "北风",
      "wind_sc_d": "1-2",
      "wind_sc_n": "1-2"
    },
    {
      "cond_code_d": "101",
      "cond_code_n": "101",
      "cond_txt_d": "多云",
      "cond_txt_n": "多云",
      "date": "2018-04-19",
      "tmp_max": "26",
      "tmp_min": "14",
      "wind_dir_d": "北风",
      "wind_dir_n": "北风",
      "wind_sc_d": "1-2",
      "wind_sc_n": "1-2"
    },
    {
      "cond_code_d": "104",
      "cond_code_n": "305",
      "cond_txt_d": "阴",
      "cond_txt_n": "小雨",
      "date": "2018-04-20",
      "tmp_max": "24",
      "tmp_min": "16",
      "wind_dir_d": "北风",
      "wind_dir_n": "北风",
      "wind_sc_d": "1-2",
      "wind_sc_n": "1-2"
    },
    {
      "cond_code_d": "305",
      "cond_code_n": "305",
      "cond_txt_d": "小雨",
      "cond_txt_n": "小雨",
      "date": "2018-04-21",
      "tmp_max": "21",
      "tmp_min": "7",
      "wind_dir_d": "北风",
      "wind_dir_n": "北风",
      "wind_sc_d": "1-2",
      "wind_sc_n": "1-2"
    },
    {
      "cond_code_d": "101",
      "cond_code_n": "101",
      "cond_txt_d": "多云",
      "cond_txt_n": "多云",
      "date": "2018-04-22",
      "tmp_max": "20",
      "tmp_min": "8",
      "wind_dir_d": "北风",
      "wind_dir_n": "北风",
      "wind_sc_d": "1-2",
      "wind_sc_n": "1-2"
    },
    {
      "cond_code_d": "104",
      "cond_code_n": "104",
      "cond_txt_d": "阴",
      "cond_txt_n": "阴",
      "date": "2018-04-23",
      "tmp_max": "23",
      "tmp_min": "9",
      "wind_dir_d": "北风",
      "wind_dir_n": "北风",
      "wind_sc_d": "1-2",
      "wind_sc_n": "1-2"
    }
  ],
}

//当前的天气
function getnowdata() {
  return nowdata;
}

//逐小时预报
function gethourdata() {
  return hourdata;
}

//未来一周天气
function getweekdata() {
  return weekdata;
}

//当前日期
function getNowdate(){
  //得到当前的日期
  var date = new Date();
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [month, day].map(formatNumber).join('-');
}

//转换为数字
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//当前日期属于周几
function getNowdayWeek() {
  //得到当前的日期
  var mydate = new Date();
  var myddy = mydate.getDay(); //获取存储当前日期
  var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  return weekday[myddy];
}
//未来一天的时间
function getNowNextDay (){
  
}

//未来一周的时间
function getNowNextWeek(){
  //得到当前的日期
  var date = new Date();
  var hour = date.getHours();
  var result = []; //结果
  var num = 1; //下标

  //遍历获取未来的时间
  for (var i = 3; i < 24; i + 3) {
    var temp = hour + 3;
    if (temp >= 10 & temp < 24) {
      temp = temp;
    } else if (temp >= 24) {
      temp = temp - 24 > 10 ? temp - 24 : "0" + temp - 24;
    } else if (temp < 10) {
      temp = "0" + temp;
    }
    result[result] = temp;
  }
  return result;
}

//对外接口
module.exports = {
  getnowdata: getnowdata, //当前的天气
  gethourdata: gethourdata, //逐小时预报
  getweekdata: getweekdata, //未来一周天气
  getNowdate: getNowdate, //获取当前日期
  getNowNextDay: getNowNextDay, //未来一天的时间
  getNowNextWeek: getNowNextWeek, //未来一周的日期
  getNowdayWeek: getNowdayWeek,//
}