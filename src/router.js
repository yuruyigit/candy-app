import React from 'react';
import { Router, Route, IndexRedirect} from 'dva/router';
import IndexPage from './routes';
import Login from './routes/login';
import SignIn from './routes/signIn';

const Home = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home'));
  }, 'home');
};
const OpenListDetail = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/trend/detail'));
  }, 'openListDetail');
};
const OpenList = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/trend'));
  }, 'openList');
};
const LuckyList = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/lucky'));
  }, 'LuckyList');
};
const BALANCE = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/lucky/balance'));
  }, 'balance');
};
const WIN = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/lucky/win'));
  }, 'win');
};
const Flow = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/lucky/flow'));
  }, 'flow');
};
const Approve = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/lucky/approve'));
  }, 'approve');
};
const BJK3 = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/BJK3'));
  }, 'BJK3');
};
const BJK3DETAIL = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/BJK3-detail'));
  }, 'BJK3-detail');
};
const BJPK10 = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/BJPK10'));
  }, 'BJPK10');
};
const BJPK10DETAIL = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/BJPK10-detail'));
  }, 'BJPK10-detail');
};
const CQSSC = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/CQSSC'));
  }, 'CQSSC');
};
const CQSSCDETAIL = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/CQSSC-detail'));
  }, 'CQSSC-detail');
};
const PAY = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/pay'));
  }, 'PAY');
};

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRedirect to="/home" />
        <Route path="/home" getComponent={Home} />
        <Route path="/BJK3" getComponent={BJK3} />
        <Route path="/BJK3-detail" getComponent={BJK3DETAIL} />
        <Route path="/BJPK10" getComponent={BJPK10} />
        <Route path="/BJPK10-detail" getComponent={BJPK10DETAIL} />
        <Route path="/CQSSC" getComponent={CQSSC} />
        <Route path="/CQSSC-detail" getComponent={CQSSCDETAIL} />
        <Route path="/trend" getComponent={OpenList} />
        <Route path="/openListDetail:id" getComponent={OpenListDetail} />
        <Route path="/lucky" getComponent={LuckyList} />
        <Route path="/balance" getComponent={BALANCE} />
        <Route path="/win" getComponent={WIN} />
        <Route path="/flow" getComponent={Flow} />
        <Route path="/approve" getComponent={Approve} />
        <Route path="/pay" getComponent={PAY} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/SignIn" component={SignIn} />
    </Router>
  );
}

export default RouterConfig;
