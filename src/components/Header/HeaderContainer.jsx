import React from "react";
import Header from "./Header";
// import * as axios from "axios";
import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../redux/auth-reducer";
// import { authAPI } from "../api/api";

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUserData();
  //   // axios
  //   //   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
  //   //     withCredentials: true,
  //   //   })
  //   // authAPI.me().then(response => {
  //   //   if (response.data.resultCode === 0) {
  //   //     const { id, login, email } = response.data.data;
  //   //     this.props.setAuthUserData(id, login, email);
  //   //   }
  //   // });
  // }
  render() {
    return <Header {...this.props} />;
  }
}
const mapDispatchToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapDispatchToProps, { logout })(HeaderContainer);
