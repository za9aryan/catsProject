import {
    set
} from '../actions/actions'


export const setSomethingEffect = () => {
    return async(dispatch, getState, services) => {
        try {
            const res = await services.getData()

            if(res) {
                console.log(res);
                // dispatch(set())
            }
        } catch(e) {
            console.log(e);
        }
    }
}