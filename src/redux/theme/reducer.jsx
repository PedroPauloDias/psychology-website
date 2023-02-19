import ThemeActionTypes from "./action-types"
const initialState = {
  currentTheme: 'Light'
}
const themeReducer = (state= initialState, action) => {
  if (action.type === ThemeActionTypes.THEME) {
    return{...state, currentTheme: action.payload}
  }
  return state 
}
export default themeReducer;