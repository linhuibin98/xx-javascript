// 时间格式化

/*
    new Date()   获取当前时间 string
    Date.UTC(data) 解析到指定时间的时间戳
    Date.now()   获取当前时间的时间戳  number
    Date.parse(data) 解析时间返回时间戳

    Date.prototype   原型上的方法
        getFullYear()   返回指定日期的年份
        getMonth()   返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月, 记得+1后补0
        getDate()   返回一个1 到 31的整数值, 小于10的日期记得补0
        getHours()  返回一个指定的日期对象的小时, 小于10的日期记得补0
        getMinutes() 返回一个指定的日期对象的分钟数
        getSeconds()    返回一个指定的日期对象的秒数
        getMilliseconds() 返回一个指定的日期对象的毫秒数
        getDay()    返回一个具体日期中一周的第几天，0: 星期天, 1: 星期一


        getTime()   返回一个时间的格林威治时间数值(时间戳)




*/

// 自己实现一个format格式化函数

Date.prototype.format = function (fmt) {
   var o = {
       'M+': this.getMonth() + 1, //  月份
       'D+': this.getDate(), // 日
       'h+': this.getHours(), // 时
       'm+': this.getMinutes(), // 分
       's+': this.getSeconds(), // 秒
   };

   if (/(y+)/i.test(fmt)) {
       fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substring(4 - RegExp.$1.length));  // 根据fmt的年份y的格式截取
   }

   for (var key in o) {
       if (o.hasOwnProperty(key) && new RegExp('('+ key+ ')').test(fmt)) {
           console.log(RegExp.$1);
           fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? o[key] : (('00' + o[key]).substring(('' + o[key]).length)))
       }
   }
   return fmt;
};


let date = new Date();

console.log(date.format('YYYY-MM-DD hh:mm:ss'));
