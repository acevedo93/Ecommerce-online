const INITIAL_STATE = {
  currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch( action.type) {
    case 'SET_CURRENT_USER':
      console.log(action)
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}