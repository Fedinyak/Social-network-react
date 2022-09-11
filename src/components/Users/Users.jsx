import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
// import userPhoto from "../asserts/images/users.png";
import userPhoto from "../../asserts/images/users.png";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
// import * as axios from "axios";
// import { usersAPI } from "../api/api";

const Users = props => {
  // const pagesCount = 3;
  // const pagesCount = this.props.totalUserCount / this.props.pageSize;
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <section>
      {/* <ul className="users__list list">
        {pages.map(page => {
          return (
            <li
              className={props.currentPage === page && "usersListItemSelected"}
              onClick={e => {
                props.onPageChanged(page);
                // this.props.setCurrentPage(page);
              }}
            >
              {page}
            </li>
          );
        })}
      </ul> */}
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUserCount={props.totalUserCount}
        pageSize={props.pageSize}
      />
      {/* {props.users.map(user => (
        <User
          user={user}
          followingInProgess={props.followingInProgess}
          key={user.id}
          unfollow={props.unfollow}
          follow={props.follow}
          photos={props.photos}
        />
      ))} */}
      {/* <button onClick={this.getUsers}>Get users</button> */}
      {props.users.map(user => (
        <div key={user.id}>
          <NavLink to={"/profile/" + user.id}>
            <img
              className="users__img"
              alt={`${user.name} avatar`}
              src={user.photos.small !== null ? user.photos.small : userPhoto}
            />
          </NavLink>
          <h3>{user.name}</h3>
          <p>
            <strong>{user.status}</strong>
          </p>
          <p>
            {"user.location.city"} {"user.location.country"}
          </p>
          {user.followed ? (
            <button
              disabled={props.followingInProgress.some(id => id === user.id)}
              onClick={() => {
                props.unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some(id => id === user.id)}
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
          <hr></hr>
          <br></br>
        </div>
      ))}
    </section>
  );
};

export default Users;
