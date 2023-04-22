 import { Link } from "react-router-dom";

function Blogs(props) {
  const loaded = () => {
    return (
      <div className="blog-box card">
        <h2>Read Our Recent Articles</h2>
        {
          
          props.blogs.map((blog) => (
            <div key={blog._id} className="blogContainer">
              <ul>
              <Link to={`/blogs/${blog._id}`}>
                <li>{blog.title}</li>
              </Link>
              </ul>
            </div>
          ))

        }
      </div>
    )
    
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return props.blogs ? loaded() : <h1>Loading...</h1>;
}

export default Blogs;
