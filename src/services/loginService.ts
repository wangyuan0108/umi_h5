/*
 * @Author: wangyuan
 * @Date: 2021-03-02 14:30:17
 * @LastEditTime: 2021-03-02 15:07:02
 * @LastEditors: wangyuan
 * @Description:
 */
import { post } from '@/utils/baseRequest';
interface ILogin {
  acount: string;
  password: number;
}

export const login = (data: ILogin) => {
  return post('/api/admin/auth/login', data);
};
