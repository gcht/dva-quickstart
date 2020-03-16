
export default {

  namespace: 'exampleModel',

  state: {
    a: 123,
    b: '测试',
    userInfo: {
      name: '张三',
      email: 'zhangsan@yonyou.com'
    },
    counter: {
      value: 100,
      showCaption: '这是一个dva demo',
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ]
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      //

      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {


      return { ...state, ...action.payload };
    },
    changeName(state, action){
      return { ...state, ...action.payload };
    }
  },

};
