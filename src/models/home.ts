/*
 * @Author: wangyuan
 * @Date: 2021-03-02 14:13:33
 * @LastEditTime: 2021-03-04 11:46:25
 * @LastEditors: wangyuan
 * @Description:
 */
/*
 * @Author: wangyuan
 * @Date: 2020-07-01 09:51:16
 * @LastEditTime: 2020-08-25 15:41:16
 * @LastEditors: wangyuan
 * @Description:
 */
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getFakeCaptcha } from '@/services/loginService';
export interface IndexModelState {
  name: string;
}
export interface IndexModelType {
  namespace: 'home';
  state: IndexModelState;
  effects: {
    login: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const IndexModel: IndexModelType = {
  namespace: 'home',
  state: {
    name: 'uuiioo',
  },
  effects: {
    *login({ payload }, { call, put }) {
      const a = yield call(getFakeCaptcha, payload);
      console.log('login======1111', a, payload);
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default IndexModel;
