const cat = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MEOW': {
      const newState = { ...state }
      newState.headLine += 'meow'
      return newState
    }
    default:
      return state
  }
}

export default cat
