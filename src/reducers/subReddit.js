import { RECEIVE_POSTS, REQUEST_POSTS } from '../actions/redditApi'

const subReddit = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })
  }
}

export default subReddit
