import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import './Form.css'

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
    <section>
      <div className="form-div">
        <div className="form-title">
          <h3>Edit Article</h3>
        </div>
        
          <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label for="title" className="form-label">
              Title
            </label>
            <input
              className="form-input"
              id="title"
              type="text"
              value={editForm.title}
              name="title"
              placeholder="Enter blog title"
              onChange={handleChange}
            />
            </div>

            <div className="form-item">
            <label for="name" className="form-label">
              Plant Name
            </label>
            <input className="form-input"
              id="name"
              type="text"
              value={editForm.name}
              name="name"
              placeholder="Enter plant name"
              onChange={handleChange}
            />
            </div>
            <div className="form-item">
            <label for="createdBy" className="form-label">
            Author Name
            </label>
            <input className="form-input"
              id="createdBy"
              type="text"
              value={editForm.createdBy}
              name="createdBy"
              placeholder="Author Name"
              onChange={handleChange}
            />
            </div>
            <div className="form-item">
            <label for="image" className="form-label">
            Image
            </label>
            <input className="form-input"
              id="image"
              type="text"
              value={editForm.image}
              name="image"
              accept="uploads/*"
              placeholder="image"
              onChange={handleChange}
            />
            </div>
            <div className="form-item">
            <label for="message" className="form-label">
            Message
            </label>
            <textarea className="form-input"
              id="message"
              type="textarea"
              value={editForm.description}
              name="description"
              placeholder="Details about the plant"
              onChange={handleChange}
              maxLength="500"
            />
           </div>

           <div className="form-item">

           <label for="date" className="form-label">
            Date
            </label>
            <input className="form-input"
              id="date"
              type="date"
              value={editForm.date}
              name="date"
              placeholder="Date"
              onChange={handleChange}
            />
            </div>

            <div className="form-item btn-row">
              <button type="submit" className="form-btn">Update Blog</button>
            </div>

          </form>
        
      </div>
    </section>
  );
};

export default EditBlog;