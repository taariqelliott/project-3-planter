import { useParams, useNavigate } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { Link } from "react-router-dom";

const BlogShow = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const blogs = props.blogs;
  const blog = blogs.find((b) => b._id === id);

  const removeBlog = (e) => {
    e.preventDefault();
    props.deleteBlog(blog._id);
    navigate("/plants");
  };

  const formatDate = (newDate) => {
    let d = new Date(blog.date);

    let date = d.getDate();
    let month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    let year = d.getFullYear();
    newDate = date + "/" + month + "/" + year;
    console.log(newDate);
    return newDate;
  };

  return (
    <div className="show-container">
      <div className="image-box">
        <img className="show-img" src={blog.image} alt={blog.title} />
      </div>
      <div className="show-content">
        <h1>{blog.title}</h1>

        <p>Created By: {blog.createdBy}</p>
        <p>{blog.description}</p>
        <p>Date of creation: {formatDate(blog.date)}</p>
        <Link to={`/edit/${blog._id}`} key={blog._id}>
          <button className="btn-lg">Edit Blog</button>
        </Link>
        <button className="btn-lg" id="delete" onClick={removeBlog}>
          DELETE
        </button>
        <div className="flex-comments-box"><Comments currentUserId="1" curr/></div>
      </div>
    </div>
  );
};

export default BlogShow;
