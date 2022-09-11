import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer'
import React from "react";
import ReactDOM from 'react-dom'

const state= {
  posts: [
    { id: 1, message: "ja", likesCount: 10 },
    { id: 2, message: "Hi", likesCount: 2 },
  ],
};


it('length of posts should be incremented', () => {
const action = addPostActionCreator('go!')
const newState = profileReducer(state, action  )

expect(newState.posts.length).toBe(3)
})

it('string', () => {
const action = addPostActionCreator('go!')

const newState = profileReducer(state, action  )

expect(newState.posts[2].message).toBe('go!')
})

it('after deleting length of messages should be decrement', () => {
const action = deletePost(1) 

const newState = profileReducer(state, action  )

expect(newState.posts.length).toBe(1)
})
