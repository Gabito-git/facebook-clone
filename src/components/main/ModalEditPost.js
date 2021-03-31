import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { startDeletePost, updateActivePost } from '../../actions/posts';
import { openModalPost } from '../../actions/ui';

const ModalEditPost = ({ 
    body, 
    postedImageUrl,   
    id,
    uid: postUid
 }) => {

    const { uid } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const handleDeletePost = () => {
        dispatch( startDeletePost( id ) );
    }

    const handleEditPost = () => {
        dispatch( updateActivePost({
            body,
            postedImageUrl,            
            id
        }) )

        dispatch( openModalPost() );
      
    }

    return (
        <div className="edit">
            <div 
                className="edit__top"
                onClick={ handleEditPost }
                style={{ display: ` ${ postUid !== uid ? 'none': 'flex' } `}}
            >
                <div className="edit__icon">
                    <EditOutlinedIcon fontSize="inherit"/>
                </div>
                <p>Editar publicación</p> 
            </div>

            <div 
                className="edit__bottom"
                onClick = { handleDeletePost }
            >
                <div className="edit__icon"> 
                    <DeleteForeverOutlinedIcon fontSize="inherit"/>
                </div>
                <p>Mover a la papelera</p> 
            </div>
            
        </div>
    )
}

export default ModalEditPost
