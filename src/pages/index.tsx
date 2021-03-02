/*
 * @Author: wangyuan
 * @Date: 2021-03-01 13:44:36
 * @LastEditTime: 2021-03-02 15:33:36
 * @LastEditors: wangyuan
 * @Description:
 */
import { useDispatch, connect } from 'umi';
import styles from './index.scss';
import { Button } from 'antd-mobile';
import { getWXContext } from 'wx-server-sdk';

const IndexPage = () => {
  const dispacth = useDispatch();
  const wx = () => {
    dispacth({
      type: 'home/query',
      payload: {
        acount: 'wy',
        password: 123456,
      },
    });
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
};

export default IndexPage;
