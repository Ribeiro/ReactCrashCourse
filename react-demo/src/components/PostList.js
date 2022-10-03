import { useState, useEffect } from "react"

export const PostList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => {
                console.log(err)
            })
    }, []) //The empty array on second parameter tells to useEffect to load only once when component renders for the first time


    return <div>
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    </div>

}