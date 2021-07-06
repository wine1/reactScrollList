import React from 'react';
import ReactDOM from 'react-dom';
import './asserts/sass/style.scss'
// import App from './App';
import Route from './router/index'
// import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import './mock/mock'

ReactDOM.render(
  // <Provider store={store}>
    <Route />,
  // </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
