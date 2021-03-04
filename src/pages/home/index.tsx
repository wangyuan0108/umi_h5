/*
 * @Author: wangyuan
 * @Date: 2021-03-01 13:44:36
 * @LastEditTime: 2021-03-04 11:47:12
 * @LastEditors: wangyuan
 * @Description:
 */
import { useDispatch, connect } from 'umi';
import styles from './index.scss';
import { Button, NavBar, Icon } from 'antd-mobile';
import { getWXContext } from 'wx-server-sdk';

const IndexPage = () => {
  const dispacth = useDispatch();
  const login = () => {
    console.log('click=======');

    dispacth({
      type: 'home/login',
      payload: {
        mobile: '1234567',
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
      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        NavBar
      </NavBar>
      <div className={styles.title}>这是一个h5</div>
      <Button type="warning" onClick={login}>
        点击
      </Button>
    </div>
  );
};

export default IndexPage;
