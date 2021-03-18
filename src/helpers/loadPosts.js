

const loadPosts = async( postsSnap ) => {
   // const postsSnap = await db.collection( `posts` ).get();
   const posts = [];

   postsSnap.forEach( snapHijo => {
        posts.push( { ...snapHijo.data(), id: snapHijo.id } )

   })
  
   return posts;
}

export default loadPosts
