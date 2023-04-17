import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Form.css'

const New = (props) => {

  const navigate = useNavigate()
  const [newForm, setNewForm] = useState({
    title: "",
    name: "",
    createdBy: "",
    image: "",
    description: "",
    date: Date
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handleSubmit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBlog(newForm);
    setNewForm({
      title: "",
      name: "",
      createdBy: "",
      image: " ",
      description: "",
      date: Date
    });
    navigate("/blogs")
  };

  // // data is loaded
  // const loaded = () => {
  //   return (props.blogs.map((blog) => (
  //         <div key={blog._id} className="align-left">
  //           <ul>
  //             <Link to={`/blogs/${blog._id}`}>
  //             <li>
  //               {blog.title} 
  //             </li>
  //           </Link>
  //           </ul>
           
  //         </div>
  //       ))) 
  // };

  // const loading = () => {
  //   console.log("in loading");
  //   return <h1>Loading...</h1>;
  // };

  return (
    <section>
      <div className="form-div">
        <div className="form-title">
          <h3>Create Your Article</h3>
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
              value={newForm.title}
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
              value={newForm.name}
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
              value={newForm.createdBy}
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
              type="file"
              value={newForm.image}
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
              value={newForm.description}
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
              value={newForm.date}
              name="date"
              placeholder="Date"
              onChange={handleChange}
            />
            </div>

            <div className="form-item btn-row">
              <button type="submit" className="form-btn">Create Blog</button>
            </div>

          </form>
        
      </div>
    </section>
  );
};

export default New;
