import React from 'react'

const Post = ({posts,loading}) => {

    if(loading){
        return <h2>loading...</h2>
    }
  return (
    <div>

            {
              posts.map(post =>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
              ))
            }
    </div>
  )
}

export default Post