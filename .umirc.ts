/*
 * @Author: wangyuan
 * @Date: 2021-03-01 13:44:36
 * @LastEditTime: 2021-03-02 16:22:07
 * @LastEditors: wangyuan
 * @Description:
 */
import { defineConfig } from 'umi';
import pxtorem from 'postcss-pxtorem';

export default defineConfig({
  antd: {},
  dva: {
    immer: true,
    hmr: true,
  },
  // headScripts:['http://res.wx.qq.com/open/js/jweixin-1.6.0.js'],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/home/index' }],
  fastRefresh: {},
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 37.5, // 换算的基数
      // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
      //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
      // selectorBlackList: ["am"],
      propList: ['*'],
    }),
  ],
});
