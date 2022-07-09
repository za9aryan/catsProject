import * as types from '../actionTypes/actionTypes'

const initialState = {
  some: 0,
  navbar: [],
  categoryId: "",
  content: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAVBAR:
      return {
        ...state,
        navbar: [...action.navbarData]
      };
    case types.SET_CURRENT_CONTENT:
      console.log(action);
      return {
        ...state,
        content: [...action.contentData],
        categoryId: action.categoryId
      }
    default:
      return state;
  }
};

export default reducer