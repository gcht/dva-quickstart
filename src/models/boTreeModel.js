

let mockData = {
  treeData: [{
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
  }, {
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
  }],
  result: {
    message: 'load success',
    code: 200
  }
};




export default {

  namespace: 'boTreeModel',

  state: {
    message: '',
    treeData: [],
    result: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetchServerData({ payload }, { call, put }) {

      if (payload.needFetchServerData === true) {
        //这里可以有请求后台数据的逻辑....


        yield put({
          type: 'init',
          payload: mockData
        });
      } else {
        console.log('needFetchServerData is not true')
      }
    },

    *fetchInitData({ payload }, { call, put }) {
      //这里可以有请求后台数据的逻辑
      debugger;
      let info = "I'm boTreeModel.fetchInitData, called By [" + payload.src + "]";

      yield put({
        type: 'init',
        payload: { message: info }
      });

      yield put({
        type: 'fetchServerData',
        payload: {
          needFetchServerData: true
        }
      });


    }
  },

  reducers: {
    init(state, action) {
      return { ...state, ...action.payload };
    }

  },

};
