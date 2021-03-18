import { Avatar } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import PublicIcon from '@material-ui/icons/Public';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useDispatch, useSelector } from 'react-redux';

import { closeModalPost } from '../../actions/ui';
import { fileUpload } from '../../helpers/fileUpload';
import { cleanActivePost, startNewPost, updateActivePost } from '../../actions/posts';
import { useEffect, useState } from 'react';

const ModalPost = () => {

    const { userPhoto, name } = useSelector(state => state.auth);
    const { active } = useSelector(state => state.posts);
    const [bodyPost, setBodyPost] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch( updateActivePost( {
            name,
            userImageUrl: userPhoto
        } ) );

        return () =>{
            dispatch( cleanActivePost() );
        }
       
    }, [dispatch, name, userPhoto])

    const handleCloseModal = () => {
        dispatch( closeModalPost() );
    }

    const handleImage = () =>{
        document.getElementById('inputImage').click();
    }

    const handleChooseImage = async(e) => {
        const image = await fileUpload( e.target.files[0] );   
        dispatch( updateActivePost( {
            postedImageUrl: image
        } ) )
    }

    const handleNewPost = (e) => {
        e.preventDefault();

        dispatch( updateActivePost( {
            body: bodyPost
        } ) );

        dispatch( startNewPost( active ) );

        dispatch( closeModalPost() );

    }

    return (
        <div className="modalPost">
                <div className="modalPost__box">

                    <form>
                        <div className="modalPost__header">
                            <div className="modalPost__title">
                                <h3>Crear publicación</h3>
                            </div>
                            <div 
                                className="modalPost__closeIcon"
                                onClick={ handleCloseModal }
                            >
                                <ClearIcon color="inherit" fontSize="inherit" />
                            </div>
                        </div>
                        
                        <div className="modalPost__user-info">
                            <Avatar src={ userPhoto } /> 
                            <div className="modalPost__user-name">
                                <h4>{ `${ name.split(" ")[0] } ${ name.split(" ")[1] }` }</h4>
                                <span>
                                    <div className="modalPost__public">
                                        <PublicIcon fontSize="inherit"/>
                                    </div>
                                    <p>Público</p>
                                </span>
                            </div>
                        </div>
                        
                        <textarea
                            placeholder="¿Qué estás pensando, Gabriel?"
                            className={`modalPost__body ${ active.postedImageUrl && 'modalPost__body--update'} `}
                            value={ bodyPost }
                            onChange={ (e)=> { setBodyPost( e.target.value ) } }
                        >
                        </textarea>

                        {
                            active.postedImageUrl
                                &&
                            <div className="modalPost__image">
                                <img src={ active.postedImageUrl } alt="user-upload"/>
                            </div>

                        }                    

                        <div className="modalPost__add-image mt-2">
                            <p>Agregar a tu publicación</p>
                            <div 
                                className="modalPost__img-icon"
                                onClick={ handleImage }
                            >
                                <PhotoLibraryIcon color="inherit" fontSize="inherit" /> 
                            </div>
                            <input
                                id="inputImage" 
                                type="file"
                                className="hidden"
                                onChange={ handleChooseImage }
                            />
                        </div>

                        <button 
                            className="btn btn--primary block mt-2"
                            onClick={ handleNewPost }
                        >
                            Publicar
                        </button>

                    </form>


                </div>
        </div> 
    )
}

export default ModalPost
