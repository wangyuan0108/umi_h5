/*
 * @Author: wangyuan
 * @Date: 2021-03-02 14:29:54
 * @LastEditTime: 2021-03-02 14:30:02
 * @LastEditors: wangyuan
 * @Description:
 */
import { request } from 'umi';
export const post = (url: string, data?: object) => {
  return request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    requestType: 'form',
    data,
  });
};
export const get = (url: string, params?: object) => {
  return request(url, params);
};
