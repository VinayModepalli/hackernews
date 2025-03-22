import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import PostContainer from './components/PostContainer'
import { fetchPostFromId, fetchTopStoriesIds } from "./api/hn";

function App() {
  const [postIds, setPostIds] = useState([]);
    const [posts, setPosts] = useState([]);
    const [current, setCurrent] = useState(0)

    const fetchPosts = async () => {
        const ids = await fetchTopStoriesIds();
        setPostIds(ids)
        const posts = await Promise.all(ids.slice(0,10).map(fetchPostFromId))
        setPosts(posts)
        setCurrent(10)
    }

    const fetchMorePosts = async () => {
      const posts = await Promise.all(postIds.slice(current, current+10).map(fetchPostFromId))
      setPosts(prevState => [...prevState, ...posts])
      setCurrent(prevState => prevState+10)
    }

    useEffect(() => {
        fetchPosts()
    }, [])
  
  return (
    <>
      <PostContainer posts={posts}/>  
      <button onClick={fetchMorePosts}>More</button>
    </>
  )
}

export default App



// const [postIds, setPostIds] = useState([])
//   const [posts, setPosts] = useState([])

//   const getPostsInfo = () => {
//     if (posts.length){
//       getPostInfo(postIds[0])
//       getPostInfo(postIds[1])
//       getPostInfo(postIds[2])
//     }
//   }
//   const getPostInfo = id => {
//     axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
//       .then(response => {
//         let post = response.data
//         console.log(`Post ${id}: `, response)
//         // const posts = [...posts, post]
//         // setPosts(posts)
//         setPosts(prevPosts => [...prevPosts, post])
//       })
//   }
//   useEffect(() => {
//     axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
//       .then(response => {
//         // console.log(response.data)
//         setPostIds(response.data)
//       })
//       .then(() => {
//         console.log("current postIDs: ", postIds)
//         getPostsInfo()
//       })
//       .catch(error => {
//         console.log("Error: ", error)
//       })
//   }, [])
