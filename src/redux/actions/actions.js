import * as actionTypes from "../actionTypes/actionTypes"

export const set = (data) => ({
    type: actionTypes.SET,
    data
})