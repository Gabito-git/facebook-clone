import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Histories from './Histories';
import Postbox from './Postbox';
import PostScreen from './PostScreen';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';
import Widget from './Widget';

import { db } from '../../firebase/firebase-config';
import { loadDbPosts } from '../../actions/posts';
import loadPosts  from '../../helpers/loadPosts';
 
const MainScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
       db.collection('posts')
          .orderBy( "date", "desc")
          .onSnapshot( async( docs ) => {
              const posts = await loadPosts( docs );
              dispatch( loadDbPosts( posts ) )
          } )
    }, [dispatch])


    return (
        <div className="mainscreen">
            <TopNavigation />
            <div className="mainscreen__body">
                <aside className="mainscreen__left">
                    <Sidebar />
                </aside>
                <main className="mainscreen__center">
                    <div className="mainscreen__center-content">
                        <Histories />
                        <Postbox />
                        <PostScreen />
                    </div>
                </main>
                <aside className="mainscreen__right">
                    <Widget />
                    
                </aside>
            </div>
        </div>
    )
}

export default MainScreen
