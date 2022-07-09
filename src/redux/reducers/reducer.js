import * as types from '../actionTypes/action.types'

const initialState = {
    some: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case types.SET:
        return {
          ...state,
        };
      default:
        return state;
    }
  };

export default reducer