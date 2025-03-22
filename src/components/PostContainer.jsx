import { useEffect, useState } from "react";
import Post from "./Post";

const PostContainer = ({posts}) => {
    console.log(posts)
    return (
        <div key={0}>
            {posts.map((post, index) => <Post key={index} post={post} />)}
        </div>
    )
}

export default PostContainer