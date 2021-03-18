import { firebase, provider } from '../firebase/firebase-config'
import { types } from '../types/types';

export const startSignInWithGmail = () => {

    return (  ) => {
        firebase.auth().signInWithPopup( provider );  
   }
}

export const startSignOut = () => {

    return ( dispatch ) => {

        firebase.auth().signOut()
                       .then( () => {
                           dispatch( logout() );
                       } )

    }

}


export const login = ( loginObj ) => ({

    type: types.login,
    payload: loginObj

});

export const logout = () => ({
    type: types.logout
})