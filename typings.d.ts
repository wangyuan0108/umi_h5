/*
 * @Author: wangyuan
 * @Date: 2021-03-02 14:04:51
 * @LastEditTime: 2021-03-02 15:11:15
 * @LastEditors: wangyuan
 * @Description:
 */
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare module 'postcss-pxtorem';
declare interface Window {
  wx: any;
}
