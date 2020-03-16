
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
      options: []
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetchServerData({ payload }, { call, put, select }) {
      //这里可以有请求后台数据的逻辑

      //获取当前model中的数据
      const exampleModel = yield select(state => state.exampleModel);


      //model之间访问，获取当前state中的boTreeModel
      const boTreeModel = yield select(state => state.boTreeModel);
      //方式二： const boTreeModel = yield select(({boTreeModel}) =>boTreeModel)  
      //方式三： const boTreeModel = yield select(_ =>_.boTreeModel)



      exampleModel.userInfo = { ...{ email: 'xxx@yonyou.com' }, ...payload.userInfo };
      exampleModel.counter.options = boTreeModel.treeData;


      yield put({
        type: 'init',
        payload: {
          userInfo: exampleModel.userInfo,
          counter: exampleModel.counter
        }
      });
    },

    *reset({ payload }, { call, put }) {
      //这里可以有请求后台数据的逻辑

      yield put({
        type: 'fetchServerData',
        payload: {
          userInfo: {
            name: 'xxx'
          }
        }
      });


    }
  },

  reducers: {
    init(state, action) {
      return { ...state, ...action.payload };
    },
    changeName(state, action) {
      let new_userInfo = { ...state.userInfo, ...action.payload.userInfo }
      return { ...state, ...{ userInfo: new_userInfo } };
    },
    changeCity(state, action) {
      let new_userInfo = { ...state.userInfo, ...action.payload.userInfo }
      return { ...state, ...{ userInfo: new_userInfo } };
    }
  },

};
