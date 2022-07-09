import {
    setNavbar,
    setCurrentContent
} from '../actions/actions'


export const getNavbarDataEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getNavbarData()
            if (res?.data.length) {
                dispatch(setNavbar(res?.data))
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export const setCurrentCategoryEffect = (id) => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getCurrentContent(id)
            console.log(res);
            if (res?.data.length) {
                dispatch(setCurrentContent(res?.data, id))
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export const loadMoreContentEffect = (pageSize) => {

    return async (dispatch, getState, services) => {
        try {
            const { reducer: { categoryId } } = getState();
            console.log(categoryId);
            const res = await services.LoadMoreContent(pageSize, categoryId)
            if (res?.data.length) {
                dispatch(setCurrentContent(res?.data, categoryId))
            }
        } catch (e) {
            console.log(e);
        }
    }
}