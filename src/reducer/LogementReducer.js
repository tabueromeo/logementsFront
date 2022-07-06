const initialState = {favoris: ["like"]}

const LogementReducer = (state=initialState, action) => {
  let nextState
  switch (action.type) {
    case "FAVORI":
        console.log(action.value)
        return nextState || state
        break;
  
    default:
        return state
        break;
  }
}

export default LogementReducer