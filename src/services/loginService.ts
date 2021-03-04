/*
 * @Author: wangyuan
 * @Date: 2021-03-02 14:30:17
 * @LastEditTime: 2021-03-04 11:36:57
 * @LastEditors: wangyuan
 * @Description:
 */
import request from '@/utils/request';
export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};
export type MobileParamsType = {
  mobile: string;
};
export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(params: MobileParamsType) {
  return request(`/api/login/captcha`, {
    params,
  });
}
