import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import HeaderContainer from "./components/HeaderContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile';
// import ProfileContainer from "./components/Pofile/ProfileContainer";
import ProfileContainer, { withRouter } from "./components/Profile/ProfileContainer";
// import Dialogs from './components/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { Component } from "react";
import { getAuthUserData } from "./redux/auth-reducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from './redux/redux-store';

// const App = (props) => {
//   console.log(props)
//   return (
    
//     <div className="app-wrapper">
//       <HeaderContainer />
//       <Navbar />
//       <div className="main-column">
//       <Routes>
//         <Route path="/dialogs" element={<DialogsContainer />}/> 
//         <Route path="/profile/" element={<ProfileContainer />}  />
//         <Route path="/profile/:userId" element={<ProfileContainer />}  />
//         {/* <Route path="/profile/:userId?" element={<ProfileContainer />}  /> */}
//         <Route path="/users" element={<UsersContainer />}  />
//         <Route path="/login" element={<LoginPage />}  />
//       </Routes>
//       </div>
//     </div>
//     // </Router>
//   );
// }

class App  extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
render() {
  if (!this.props.initialized) {
    return <Preloader/>
  }


  return (
    
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="main-column">
      <Routes>
        <Route path="/dialogs" element={<DialogsContainer />}/> 
        <Route path="/profile/" element={<ProfileContainer />}  />
        <Route path="/profile/:userId" element={<ProfileContainer />}  />
        {/* <Route path="/profile/:userId?" element={<ProfileContainer />}  /> */}
        <Route path="/users" element={<UsersContainer />}  />
        <Route path="/login" element={<LoginPage />}  />
      </Routes>
      </div>
    </div>
    // </Router>
  );
}
}

// export default App;

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

// export default compose(
//   withRouter,
//   connect(mapStateToProps, { initializeApp }))(App) ;

const  AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App) ;

const JsApp = (props) => {
     return <React.StrictMode>
        <Router>
          <Provider store={store}>
            <AppContainer/>
            </Provider>
          </Router>
          </React.StrictMode>
  
}

export default JsApp