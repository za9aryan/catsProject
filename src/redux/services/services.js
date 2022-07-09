import axios from '../../config/index'

// export const getData = async () => {
//     return await axios.get('/images/search?limit=10&page=1&category_ids=1')
// }

export const getNavbarData = async () => {
    return await axios.get("/categories")
}

export const getCurrentContent = async (id) => {
    return await axios.get(`/images/search?limit=10&page=1&category_ids=${id}`)
}

export const LoadMoreContent10 = async (page, categoryId) => {
    return await axios.get(`/images/search?limit=10&page=${page}&category_ids=${categoryId}`)
}