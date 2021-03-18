import { types } from "../types/types";

const initState={
    modalPost: false
}


const uiReducer = (state=initState, action) => {

    switch ( action.type ) {
        case types.uiModalPostOpen:
            
            return { ...state, modalPost: true };

        case types.uiModalPostClose:

            return initState
    
        default:
            return state;
    }
    
}

export default uiReducer
