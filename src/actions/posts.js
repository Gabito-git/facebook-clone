import { db, firebase } from '../firebase/firebase-config';

import { types } from '../types/types';

const dbReference = db.collection('posts');

export const startNewPost = () => {
    
       return (dispatch, getState) => {
            
             const { posts:{active} } = getState();           

            dbReference.add({
                ...active, 
                date: firebase.firestore.FieldValue.serverTimestamp()
            })

       }

}

export const updateActivePost = ( post ) => ({

    type: types.postActiveUpdate,
    payload: post

})

export const cleanActivePost = ( ) => ({
    type: types.postActiveClean
})

export const loadDbPosts = (posts) => ({
    type: types.postLoadPosts,
    payload: posts
})

