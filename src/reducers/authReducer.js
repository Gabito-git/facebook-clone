import { types } from "../types/types";

const initState = {
    uid: null,
    name: '',
    userPhoto: ''
}


const authReducer = (state = initState, action) => {

    switch ( action.type ) {
        case types.login:
            
            return { ...state, ...action.payload };

        case types.logout:

            return initState;
    
        default:
            return state;
    }
   
}

export default authReducer
