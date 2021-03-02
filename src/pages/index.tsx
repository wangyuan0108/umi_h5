/*
 * @Author: wangyuan
 * @Date: 2021-03-01 13:44:36
 * @LastEditTime: 2021-03-02 11:30:06
 * @LastEditors: wangyuan
 * @Description:
 */
import styles from './index.scss';
import { Button } from 'antd-mobile';
import { getWXContext } from 'wx-server-sdk';

export default function IndexPage() {
  const wx = () => {
    console.log(123);

    window.wx.checkJsApi({
      jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function (res) {
        console.log('res====', res);

        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      },
    });
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button type="warning" onClick={wx}>
        wy
      </Button>
    </div>
  );
}
