import * as actionTypes from "../actionTypes/actionTypes"


export const setNavbar = (navbarData) => ({
    type: actionTypes.SET_NAVBAR,
    navbarData
})

export const setCurrentContent = (contentData, id) => ({
    type: actionTypes.SET_CURRENT_CONTENT,
    contentData,
    categoryId: id
})

export const setCurrentContent10 = (contentData, id) => ({
    type: actionTypes.SET_CURRENT_CONTENT10,
    contentData,
    categoryId: id
})

