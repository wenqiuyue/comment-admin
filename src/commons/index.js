/**
 * html转换转义字符
 */
export function HtmlEncode(str){
  let reg=new RegExp(" ",'g');//g代表全部
  str = str.replace(reg, "&nbsp;");
  reg=new RegExp("<",'g');
  str = str.replace(reg, "&lt;");
  reg=new RegExp(">",'g');
  str = str.replace(reg, "&gt;");
  reg=new RegExp("\'",'g')
  str = str.replace(reg, "&apos;");
  reg=new RegExp("\"",'g')
  str = str.replace(reg, "&quot;");
  //str = str.Replace("/", "&#47;");
  return str;
}
/**
 * html转换转义字符
 */
export function HtmlDecode(str){
  let reg=new RegExp("&nbsp;",'g');//g代表全部
  str = str.replace(reg, " ");
  reg=new RegExp("&lt;",'g');
  str = str.replace(reg, "<");
  reg=new RegExp("&gt;",'g');
  str = str.replace(reg, ">");
  reg=new RegExp("&apos;",'g');
  str = str.replace(reg, "\'");
  reg=new RegExp("&quot;",'g');
  str = str.replace(reg, "\"");
  reg=new RegExp("<br>",'g');//g代表全部
  str = str.replace(reg, "\r\n");
  return str;
}
/**
 * 换行
 */
export function HtmlLineBreak(str){
  let reg=new RegExp("\r\n",'g');//g代表全部
  str = str.replace(reg, "<br>");
  reg=new RegExp("\n",'g');
  str = str.replace(reg, "<br>")
  return str;
}
/**

 * @desc 格式化日期字符串

 * @param { String} - 日期时间字符串\服务器时间

 * @returns { String } 格式化后的日期字符串

 */

export function formatDate(value,stime) {

  // 注意ie和firefox浏览器时间格式兼容性

  let timestamp=new Date(value).getTime();

  // 补全为13位

  let arrTimestamp = (timestamp + '').split('');

  for (let start = 0; start < 13; start++) {

    if (!arrTimestamp[start]) {

      arrTimestamp[start] = '0';

    }

  }

  timestamp = arrTimestamp.join('') * 1;

  let minute = 1000 * 60;

  let hour = minute * 60;

  let day = hour * 24;

  let month = day * 30;

  let now = new Date(stime).getTime();

  let diffValue = now - timestamp;

  // 如果本地时间反而小于变量时间

  if (diffValue < 0) {

    return '不久前';

  }

  // 计算差异时间的量级

  let yearC = diffValue / (month*12);

  let monthC = diffValue / month;

  let weekC = diffValue / (7 * day);

  let dayC = diffValue / day;

  let hourC = diffValue / hour;

  let minC = diffValue / minute;

  // 数值补0方法

  let zero = function (value) {

    if (value < 10) {

      return '0' + value;

    }

    return value;

  };

  // 使用

  if (yearC >= 1) {

    // 超过1年，直接显示年月日

    return (function () {

      let date = new Date(timestamp);

      return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';

    })();

  } else if (monthC >= 1) {

    return parseInt(monthC) + '月前';

  } else if (weekC >= 1) {

    return parseInt(weekC) + '周前';

  } else if (dayC >= 1) {

    return parseInt(dayC) + '天前';

  } else if (hourC >= 1) {

    return parseInt(hourC) + '小时前';

  } else if (minC >= 1) {

    return parseInt(minC) + '分钟前';

  }

  return '刚刚';

}