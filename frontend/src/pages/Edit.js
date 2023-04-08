import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditBlog = (props) => {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const blogs = props.blogs;
  const blog = blogs.find((b) => b._id === id);

  // state for form
  const [editForm, setEditForm] = useState(blog);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // handlesubmit for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateBlogs(editForm, blog._id);
    // redirect blog back to index
    navigate(`/blogs`);
  };

  return (
    <div className="flex-div">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            value={editForm.createdBy}
            name="createdBy"
            placeholder="name"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            value={editForm.description}
            name="description"
            placeholder="text"
            onChange={handleChange}
          /><br/>
          
          <input type="submit" value="Update Blog" />
        </form>
    </div>
  );
};

export default EditBlog;