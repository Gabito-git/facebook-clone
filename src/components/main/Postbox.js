import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import ModalPost from './ModalPost';
import { openModalPost } from '../../actions/ui';
import { fileUpload } from '../../helpers/fileUpload';
import { updateActivePost } from '../../actions/posts';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
      }
}))

const Postbox = () => {    

    const { userPhoto, name } = useSelector(state => state.auth);
    const { modalPost } = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const classes = useStyles();

    // const handleNewPost = (e) => {
    //     e.preventDefault();
    // }

    const handleAddImage = () => {
        document.getElementById( 'image-input' ).click();
    }

    const handleChooseImage = async(  e) => {
       const image = await fileUpload( e.target.files[0] );
       dispatch( updateActivePost( {
            postedImageUrl: image
       } ) );

       dispatch( openModalPost() );
    }

    const handleOpenModal = () => {
        setTimeout(() => {
            dispatch(openModalPost());
        }, 100);
    }

    return (
        <div className="postbox">
            <div className="postbox__top">
                <Avatar 
                    className={ classes.small}
                    src={ userPhoto }
                />
                <form className="postbox__form">
                    <div className="postbox__input-box">
                        <input 
                            placeholder={ `¿Qué estas pensando, ${ name.split(" ")[0] } ?` } 
                            onClick={ handleOpenModal } 
                            disabled={ modalPost }                           
                        />
                    </div>
                    <button
                        type="submit"
                        className="hidden"                        
                    >
                    </button>
                </form>
            </div>
            
            <div className="postbox__bottom">
                <div className="postbox__option">
                    <div className="postbox__icon postbox__icon--red">
                        <VideocamIcon fontSize='inherit' />
                    </div>
                    <p>Video en vivo</p>
                </div>
                <div 
                    className="postbox__option "
                    onClick={ handleAddImage }
                >
                    <div className="postbox__icon postbox__icon--green">
                         <PhotoLibraryIcon fontSize='inherit' />
                    </div>
                    <p>Foto/video</p>
                </div>
                <input 
                    id="image-input"
                    type="file"
                    className="hidden"
                    onChange={  handleChooseImage  }
                />
                <div className="postbox__option ">
                    <div className="postbox__icon postbox__icon--yellow">
                         <InsertEmoticonIcon fontSize='inherit' />
                    </div>
                    <p>Sentimiento/actividad</p>
                </div>

            </div> 
            {
                    modalPost
                      &&
                <ModalPost />       
            } 

        </div>
    )
}

export default Postbox
