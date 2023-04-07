import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Blogs(props) {
  // create state to hold about data

  const [blogs, setblog] = useState(null);
  

  // create function to make api call


  const getblogs = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "seedblogs");
    // turn response into javascript object
    const data = await response.json();
    console.log(data)

    // set the about state to the data
    setblog(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load

  useEffect(() => {
    getblogs()}, []);

  // define a function that will return the JSX needed once we get the data


  const loaded = () => {
    return blogs.map((blog) => (
      <div key={blog.id} className="blogContainer">
        <Link to={`/blogs/${blog.id}`}>
        <h1>{blog.title}</h1>
        </Link>
        
    </div>
    ));
  };

  

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return(blogs ? loaded(): <h1>Loading...</h1>)


}

export default Blogs;
