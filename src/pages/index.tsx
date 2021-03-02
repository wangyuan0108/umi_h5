/*
 * @Author: wangyuan
 * @Date: 2021-03-01 13:44:36
 * @LastEditTime: 2021-03-02 16:10:18
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
      success: (res: any) => {
        console.log('res====', res);
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      },
    });
  };
  return (
    <div>
      <div className={styles.title}>这是一个h5</div>
      <Button type="warning" onClick={wx}>
        点击
      </Button>
    </div>
  );
};

export default IndexPage;
