import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogShow = (props) => {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const blogs = props.blogs;
  const blog = blogs.find((b) => b._id === id);

  const removeBlog = (e) => {
    e.preventDefault()
    props.deleteBlog(blog._id);
    navigate("/plants");
  };


  return (
    <div className="show-box">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>Created By: {blog.createdBy}</p>
      <p>{blog.description}</p>
       <Link to={`/edit/${blog._id}`} key={blog._id}>
        <button>Edit Blog</button>
      </Link>
      <button id="delete" onClick={removeBlog}>
        DELETE
      </button>
    </div>
  );
};

export default BlogShow;
