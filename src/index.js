import dva from 'dva';

import './index.css';
import exampleModel from './models/exampleModel';
import boTreeModel from './models/boTreeModel';

import router from './router';

// 1. Initialize
const app = dva({
  initialState: { initData: { now: (new Date()).toLocaleString() } }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(exampleModel);
app.model(boTreeModel);


// 4. Router
app.router(router);


// 5. Start
app.start('#root');
