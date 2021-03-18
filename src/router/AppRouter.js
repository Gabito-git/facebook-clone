import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import LoginScreen from "../components/auth/LoginScreen";
import MainScreen from "../components/main/MainScreen";
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import { useState } from "react";


const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState( true );
    const [isLogged, setIsLogged] = useState( false );

    useEffect( () => {

        firebase.auth().onAuthStateChanged( ( user ) => {

            if( user?.uid ){

                dispatch( login( {
                    uid: user.uid,
                    name: user.displayName,
                    userPhoto: user.photoURL
                }  ) );

                setIsLogged( true );
            }else{
                setIsLogged( false );
            }

            setChecking( false );
        });

    }, [ dispatch ] );
     
    if(checking) return <h1>Wait...</h1>

    return (
        <Router basename={process.env.PUBLIC_URL}>

            <div>

                    <Switch>

                        <PublicRoute
                            isAuthenticated = { isLogged } 
                            exact 
                            path="/login" 
                            component={ LoginScreen } 
                        />

                        <PrivateRoute 
                            isAuthenticated = { isLogged } 
                            exact 
                            path="/" 
                            component={ MainScreen } 
                        />

                        <Redirect to="/login" />

                    </Switch>

            </div>
            
        </Router>
    )
}

export default AppRouter
