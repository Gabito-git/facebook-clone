import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import Thunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';
import postReducer from '../reducers/postReducer';
import uiReducer from '../reducers/uiReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    posts: postReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore( 
    rootReducer, composeEnhancers( applyMiddleware( Thunk ) )
);  