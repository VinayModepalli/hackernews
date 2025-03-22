import axios from 'axios'
const baseUrl = ' https://hacker-news.firebaseio.com/v0'

export const fetchTopStoriesIds = async () => {
    const res = await axios.get(`${baseUrl}/topstories.json`)
    return res.data
}

export const fetchPostFromId = async (id) => {
    const res = await axios.get(`${baseUrl}/item/${id}.json`)
    // console.log(res.data)
    return res.data
}

// module.exports = [fetchTopStoriesIds]