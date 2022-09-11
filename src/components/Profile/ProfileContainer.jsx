import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
// import { setUserProfile } from "../redux/profile-reducer";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
// import * as axios from "axios";
// import { withRouter } from "react-router";
import { useParams, Navigate } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
// import { usersAPI } from "../api/api";

export function withRouter(Children) {
  return props => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
    // let userId = this.props.match.params.userId;
    // if (!userId) {
    //   // userId = 2;
    //   userId = this.props.authorizedUserId;
    //   if (!userId) {
    //     this.props.history.push("/login");
    //   }
    // }
    // this.props.getUserProfile(userId);
    // // setTimeout(() => {
    // this.props.getStatus(userId);
    // // }, 1000);
    // // usersAPI.getProfile(userId).then(response => {
    // //   this.props.setUserProfile(response.data);
    // // });
    // // this.props.getStatus(userId);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

// compose(
//   connect(mapStateToProps, { getUserProfile }),
//   withRouter,
//   withAuthRedirect)
// (ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// props => {
//   if (!this.props.isAuth) return <Navigate to={"/login"} />;
//   return <ProfileContainer {...props} />;
// };
// const mapStateToPropsForRedirect = state => {
//   return {
//     isAuth: state.auth.isAuth,
//   };
// };
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(
//   AuthRedirectComponent
// );

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// // const WithUrlDataContainerComponent = withRouter(ProfileContainer);

// export default connect(mapStateToProps, { getUserProfile })(
//   WithUrlDataContainerComponent
// );

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
