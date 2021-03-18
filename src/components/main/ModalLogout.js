import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { useDispatch, useSelector } from "react-redux";
import { startSignOut } from "../../actions/auth";


const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      }
}))

const ModalLogout = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { userPhoto, name } = useSelector(state => state.auth)

    const handleLogOut = () =>{
        dispatch( startSignOut() );
    } 

    return (
        <div className="modal">
            <div className="modal__top">
                <Avatar 
                    className={ classes.small}
                    src={ userPhoto }
                />
                <div className="modal__user-info">
                    <p>{ `${ name.split(" ")[0] } ${ name.split(" ")[1] }` }</p>
                    <span>Ver tu perfil</span>
                </div>
            </div>

            <div className="modal__separator"></div>

            <div 
                className="modal__bottom"
                onClick={ handleLogOut }
            >
                <div className="modal__close-icon"> 
                    <MeetingRoomIcon fontSize="inherit"/> 
                </div>
                <p>Cerrar sesión</p>
            </div>            
        </div>
    )
}

export default ModalLogout
