import dva from 'dva';
import { connect } from "dva"; //从dva中导入connect

import './index.css';
import exampleModel from './models/exampleModel';
import router from './router'; 

// 1. Initialize
const app = dva({
    initialState: { initData: {now: (new Date()).toLocaleString()} }
  });

// 2. Plugins
// app.use({});

// 3. Model
app.model(exampleModel);


// 4. Router
app.router(router);


// 5. Start
app.start('#root');
