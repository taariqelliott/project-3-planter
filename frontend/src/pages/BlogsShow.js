import React from "react"
import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"


const BlogsShow = (props) => {
    const params = useParams()
    const id = params.id
    // const blog = blogs.find((b) => b.id === id);
    const navigate = useNavigate()
    
    const [blogs, setBlog] = useState(null)
    // return (
    //     <div>
    //         <h1>{blog.title}</h1>
    //         <p>{blog.description}</p>
    //     </div>
    // )

      // define a function that will return the JSX needed once we get the data

    
    const loaded = () => (
        <div>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
    </div>


    )


 // if data arrives return the result of loaded, if not, an h1 that says loading
 return(blogs ? loaded(): <h1>Loading...</h1>) 
    
    
}

export default BlogsShow