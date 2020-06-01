export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

export function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map((child) => child.data)
  }
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts())
    return fetch('https://www.reddit.com/r/react-js.json')
      .then((response) => response.json())
      .then((json) => dispatch(receivePosts(json)))
  }
}