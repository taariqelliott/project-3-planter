import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { format } from 'date-fns'

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



const formatDate = (newDate) => {
  let d = new Date(blog.date)

  let date = d.getDate();
  let month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  let year = d.getFullYear();
  newDate = date + "/" + month + "/" + year;
  console.log(newDate);
  return newDate
 }
  



  return (
    <div className="show-box">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>Created By: {blog.createdBy}</p>
      <p>{blog.description}</p>
      <p>Date of creation: {formatDate(blog.date)}</p>
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
