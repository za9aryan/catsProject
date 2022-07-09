import {
    setNavbar,
    setCurrentContent,
    setCurrentContent10
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
            const res = await services.LoadMoreContent(pageSize, categoryId)
            if (res?.data.length) {
                dispatch(setCurrentContent(res?.data, categoryId))
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export const loadMoreContent10Effect = (page) => {
    return async (dispatch, getState, services) => {
        try {
            const { reducer: { categoryId, content } } = getState();
            const res = await services.LoadMoreContent10(page, categoryId)
            if (res?.data.length) {
                dispatch(setCurrentContent10(res?.data, categoryId))
            }
        } catch (e) {
            console.log(e);
        }
    }
}