import { types } from "../types/types";

const initState={
    posts:[],
    active:{
        body: '',
        postedImageUrl: '',
        name: '',
        userImageUrl:''
    }
}

const postReducer = (state=initState, action) => {
    
    switch (action.type) {
        case types.postAddNew:
            
            return { ...state, posts:[ ...state.posts, action.payload ] };

        case types.postActiveUpdate:

            return {...state, active:{...state.active, ...action.payload}};

        case types.postActiveClean:

            return { ...state, active: initState.active };
        
        case types.postLoadPosts:

           return { ...state, posts: action.payload  }
    
        default:
            return state;
    }
}

export default postReducer
