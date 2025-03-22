const Post = ({post}) => {
    // console.log(post)
    return (
        <div key={post.id}>
            <a href={post.url} target="_blank"><h4>{post.title}</h4></a>
            <p>By: {post.by}</p>
        </div>
    )
}

export default Post;