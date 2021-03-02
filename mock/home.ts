/*
 * @Author: wangyuan
 * @Date: 2021-03-02 15:29:40
 * @LastEditTime: 2021-03-02 15:31:00
 * @LastEditors: wangyuan
 * @Description:
 */

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET 可忽略
  'POST /api/admin/auth/login': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
