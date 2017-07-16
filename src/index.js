import 'babel-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
import { message } from 'antd';
import './index.html';
import './index.css';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: browserHistory,
  onError(error) {
    message.error(error.message);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login'));
app.model(require('./models/menuList'));
app.model(require('./models/trend'));
app.model(require('./models/home'));
// app.model(require('./models'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');