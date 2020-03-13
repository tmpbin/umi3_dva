export default {
  namespace: 'app',
  state: {
    name: 'user_model',
    page: '',
  },
  subscriptions: {
    //订阅路由更新
    setupHistory({ dispatch, history }) {
      console.log('subscription a route event monitor');
      history.listen(location => {
        dispatch({
          type: 'updateState',
          payload: {
            page: location.pathname,
          },
        });
      });
    },
  },
  effects: {},
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  }
}
