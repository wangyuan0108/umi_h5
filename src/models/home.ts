/*
 * @Author: wangyuan
 * @Date: 2021-03-02 14:13:33
 * @LastEditTime: 2021-03-02 14:18:46
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
import { login } from '@/services/loginService';
export interface IndexModelState {
  name: string;
}
export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    name: 'uuiioo',
  },
  effects: {
    *query({ payload }, { call, put }) {
      // const a = yield call(
      //   login,
      //   payload,
      // )
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
