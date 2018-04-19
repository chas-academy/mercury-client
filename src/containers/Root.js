// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { requestSignIn } from '../actions';

import rootReducer from '../reducers';
import { App } from '../components';

// const mapStateToProps = state => ({
//   user: state,
// });

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));


const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

// class Root extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>I'm a pretty smart container that is connected to redux!</h1>
//         <Button onClick={() => this.props.dispatch(requestSignIn('fake'))}>
//           Sign me in
//         </Button>
//         <div>{JSON.stringify(this.props.user)}</div>
//       </React.Fragment>
//     );
//   }
// }

export default Root;
