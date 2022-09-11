import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
// import App, { JsApp } from './App';
import JsApp from './App';
// import store from './redux/store';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
// import StoreContext, {Provider} from './StoreContext';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const rendererEntireTree = (state) => {
// const rendererEntireTree = () => {
  root.render(
      <JsApp />
    // <React.StrictMode>

    // </React.StrictMode> 
    // <React.StrictMode>
    //   <Router>
    //     {/* <StoreContext.Provider value={store}> */}
    //     <Provider store={store}>
    //       {/* <App 
    //       // state={state} 
    //           // dispatch={store.dispatch.bind(store)} 
    //           store={store}/> */}
    //         <App />
    //       {/* </StoreContext.Provider> */}
    //       </Provider>
    //       </Router>
    // </React.StrictMode>
  );
  
// }
// rendererEntireTree(store.getState());
// rendererEntireTree();

// store.subscribe(() => {
//   let state = store.getState();
//   rendererEntireTree(state);
// });
// store.subscribe(() => {
//   rendererEntireTree();
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
