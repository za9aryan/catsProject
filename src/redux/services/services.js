import axios from '../../config/index'

export const getData = async () => {
    return await axios.get('/')
}