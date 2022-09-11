// import * as axios from "axios";
// import React from "react";
// import userPhoto from "../asserts/images/users.png";

// const Users = props => {
//   const getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then(response => {
//           console.log(response);
//           props.setUsers(response.data.items);
//         });
//       // props.setUsers([
//       //   {
//       //     id: 1,
//       //     followed: true,
//       //     photoUrl: "",
//       //     fullName: "Got",
//       //     status: "Mrachny got",
//       //     location: { city: "Moscow", country: "Russia" },
//       //   },
//       //   {
//       //     id: 2,
//       //     followed: false,
//       //     photoUrl: "",
//       //     fullName: "Negot",
//       //     status: "Ne mrachny got",
//       //     location: { city: "Moscow", country: "Russia" },
//       //   },
//       //   {
//       //     id: 3,
//       //     followed: true,
//       //     photoUrl: "",
//       //     fullName: "Kon",
//       //     status: "Krasivy kon!",
//       //     location: { city: "Moscow", country: "Russia" },
//       //   },
//       // ]);
//     }
//   };

//   return (
//     <section>
//       <button onClick={getUsers}>Get users</button>
//       {props.users.map(user => (
//         <div key={user.id}>
//           <img
//             className="users__img"
//             alt={`${user.name} avatar`}
//             src={user.photos.small !== null ? user.photos.small : userPhoto}
//           />
//           <h3>{user.name}</h3>
//           <p>
//             <strong>{user.status}</strong>
//           </p>
//           <p>
//             {"user.location.city"} {"user.location.country"}
//           </p>
//           {user.followed ? (
//             <button
//               onClick={() => {
//                 props.unfollow(user.id);
//               }}
//             >
//               Unfollow
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 props.follow(user.id);
//               }}
//             >
//               Follow
//             </button>
//           )}
//           <hr></hr>
//           <br></br>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Users;

import * as axios from "axios";
import React from "react";
// import userPhoto from "../asserts/images/users.png";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        console.log(response);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  getUsers = () => {};

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        console.log(response);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

export default UsersAPIComponent;
