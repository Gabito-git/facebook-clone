import { Redirect, Route } from "react-router";
import PropTypes from 'prop-types';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            {...rest} component={ ( props ) => (
                            !isAuthenticated
                                ? <Component {...props}/>
                                : <Redirect to="/" />
            )}
        />       
    )
}

export default PublicRoute;

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}


