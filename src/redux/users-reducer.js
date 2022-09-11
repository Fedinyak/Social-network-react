import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/validators/object-helpers";

const FOLLOW ='FOLLOW'; 
const UNFOLLOW = 'UNFOLLOW';  
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING" 
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS" 

const initialState = {
  users: [
    // { id: 1, followed: true, photoUrl: '', fullName: "Got", status:"Mrachny got", location: {city: 'Moscow', country: 'Russia'} },
    // { id: 2, followed: false, photoUrl: '', fullName: "Negot", status:"Ne mrachny got", location: {city: 'Moscow', country: 'Russia'} },
    // { id: 3, followed: true, photoUrl: '', fullName: "Kon", status:"Krasivy kon!", location: {city: 'Moscow', country: 'Russia'} },
  ],
  // page: 5,
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  // followingInProgress: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state, 
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      }
      // return {
      //   ...state,
      //   users: state.users.map(user => {
      //     if (user.id === action.userId) {
      //       return {...user, followed: true}
      //     }
      //     return user;
      //   })
      // }
    case UNFOLLOW:
      return {
        ...state, 
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      }
      
      // return {
      //   ...state,
      //   users: state.users.map(user => {
      //     if (user.id === action.userId) {
      //       return {...user, followed: false}
      //     }
      //     return user;
      //   })
      // }
      case SET_USERS:
        return { ...state, users: action.users}
      case SET_CURRENT_PAGE:
        return { ...state, currentPage: action.currentPage}
      case SET_TOTAL_USERS_COUNT:
        return { ...state, totalUserCount: action.count}
      case TOOGLE_IS_FETCHING:
        return { ...state, isFetching: action.isFetching}
      // case TOOGLE_IS_FOLLOWING_PROGRESS:
      //   return { ...state, followingInProgress: action.isFetching}
      case TOOGLE_IS_FOLLOWING_PROGRESS:
        return { ...state, 
          followingInProgress: action.isFetching 
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id=>id !== action.userId)
        }
    default:
      return state;
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})
export const toogleFollowingProgress = (isFetching, userId) => ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

// export const getUserThunkCreator = (currentPage, pageSize) => {
export const requestUsers= (page, pageSize) => {
 return (dispatch) => {
  dispatch(toogleIsFetching(true));
  dispatch(setCurrentPage(page));

  usersAPI
    .getUsers(page, pageSize)
    .then(data => {
      dispatch(toogleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
}
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toogleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  
  if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
       }
       dispatch(toogleFollowingProgress(false, userId));

}
 
 
export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
  }
 }
 
 export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
  }
 }
 
 




export default usersReducer;