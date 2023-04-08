import { useState } from "react";
import { Link } from "react-router-dom";

const New = (props) => {
  const [newForm, setNewForm] = useState({
    title: "",
    name: "",
    createdBy: "",
    image: "",
    description: ""
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
      description: ""
    });
  };

  // data is loaded
  const loaded = () => {
    return (props.blogs.map((blog) => (
          <div key={blog._id} className="align-left">
            <ul>
              <Link to={`/blogs/${blog._id}`}>
              <li>
                {blog.title} 
              </li>
            </Link>
            </ul>
           
          </div>
        ))) 
  };

  const loading = () => {
    console.log("in loading");
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            value={newForm.createdBy}
            name="createdBy"
            placeholder="name"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          /><br/>
          <input
            type="text"
            value={newForm.description}
            name="description"
            placeholder="text"
            onChange={handleChange}
          /><br/>
          
          <input type="submit" value="Create Blog" />
        </form>
        {props.blogs ? loaded() : loading()}
      </div>
    </section>
  );
};

export default New;
