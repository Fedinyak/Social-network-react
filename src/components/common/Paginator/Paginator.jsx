import React from "react";
import { NavLink } from "react-router-dom";
// import userPhoto from "../../asserts/images/users.png";

const Paginator = props => {
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <section>
      <ul className="users__list list">
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
      </ul>
    </section>
  );
};

export default Paginator;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import cn from "classnames";

// const Paginator = ({
//   totalItemsCount,
//   pageSize,
//   currentPage,
//   onPageChanged,
//   portionSize,
// }) => {
//   const pagesCount = Math.ceil(pagesCount / portionSize);

//   const pages = [];
//   for (let i = 1; i <= pagesCount; i++) {
//     pages.push(i);
//   }

//   const portionCount = Math.ceil(pagesCount / portionSize);
//   const [portionNumber, setPortionNumber] = useState(1);
//   const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
//   const rigthPortionPageNumber = portionNumber * portionSize;

//   return (
//     <section>
//       <ul className="users__list list">
//         {pages.map(page => {
//           return (
//             <li
//               className={props.currentPage === page && "usersListItemSelected"}
//               onClick={e => {
//                 props.onPageChanged(page);
//                 // this.props.setCurrentPage(page);
//               }}
//             >
//               {page}
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// export default Paginator;
