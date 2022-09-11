import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../asserts/images/users.png";

const User = props => {
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <section>
      {/* {props.users.map(user => (
        <div key={user.id}> */}
      <NavLink to={"/profile/" + props.id}>
        <img
          className="users__img"
          alt={`${props.name} avatar`}
          src={
            props.user.photos.small !== null
              ? props.user.photos.small
              : userPhoto
          }
        />
      </NavLink>
      <h3>{props.name}</h3>
      <p>
        <strong>{props.status}</strong>
      </p>
      <p>
        {"user.location.city"} {"props.location.country"}
      </p>
      {props.user.followed ? (
        <button
          disabled={props.followingInProgress.some(id => id === props.id)}
          onClick={() => {
            props.unfollow(props.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.followingInProgress.some(id => id === props.id)}
          onClick={() => {
            props.follow(props.id);
          }}
        >
          Follow
        </button>
      )}
      <hr></hr>
      <br></br>
      {/* </div>
      ))} */}
    </section>
  );
};

export default User;
