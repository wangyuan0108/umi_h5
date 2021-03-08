/*
 * @Author: wangyuan
 * @Date: 2021-03-01 15:12:01
 * @LastEditTime: 2021-03-08 17:59:09
 * @LastEditors: wangyuan
 * @Description:
 */
import 'amfe-flexible/index';
import 'normalize.css';
window.wx = require('weixin-js-sdk');
interface IQuery {
  [propName: string]: any;
}

const getUrlQuery: () => IQuery = () => {
  const url = decodeURI(location.search);
  let queryObj: IQuery = {};
  if (url.indexOf('?') != -1) {
    let str = url.substr(1);
    if (str.indexOf('&') != -1) {
      let strArr = str.split('&');
      strArr.forEach((item) => {
        let itemArr = item.split('=');
        queryObj[itemArr[0]] = itemArr[1];
      });
    } else {
      let itemArr = str.split('=');
      queryObj[itemArr[0]] = itemArr[1];
    }
  }
  return queryObj;
};
