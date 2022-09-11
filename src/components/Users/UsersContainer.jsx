import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setTotalUsersCount,
  toogleIsFetching,
  toogleFollowingProgress,
  // getUsers,
  requestUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import {
  getUsers,
  getPageSize,
  getTotalUserCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getUsersSuper,
  getUsersSuperSelector,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     // page: state.userPage.page,
//     totalUserCount: state.usersPage.totalUserCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    // users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    // page: state.userPage.page,
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toogleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
