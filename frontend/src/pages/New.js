import { useState } from "react";
import { Link } from "react-router-dom";
import './Form.css'

const New = (props) => {
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
      image: "",
      description: "",
      date: Date
    });
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
              placeholder="name"
              onChange={handleChange}
            />
            </div>
            <p>Wriiten By</p>
            <input
              type="text"
              value={newForm.createdBy}
              name="createdBy"
              placeholder="name"
              onChange={handleChange}
            />
            <br />
            <p>Image</p>
            <input
              type="text"
              value={newForm.image}
              name="image"
              placeholder="image URL"
              onChange={handleChange}
            />
            <br />
            <p>Description</p>
            <input
              type="text"
              value={newForm.description}
              name="description"
              placeholder="text"
              onChange={handleChange}
            />
            <br />

            <p>Date</p>
            <input
              type="date"
              value={newForm.date}
              name="date"
              placeholder="Date"
              onChange={handleChange}
            />
            <br />

            <input type="submit" value="Create Blog" />
          </form>
        
      </div>
    </section>
  );
};

export default New;
