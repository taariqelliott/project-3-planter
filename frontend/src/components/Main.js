import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//Import pages
import Index from "../pages/Index";
import Show from "../pages/Show";
import Home from "../pages/Home";
import BlogsShow from "../pages/BlogsShow";
import Blogs from "../pages/Blogs";
import NewPage from "../pages/New";
import EditPage from "../pages/Edit";
import Collections from "../pages/Collections";

const Main = (props) => {
  const URL = "https://plantdatabase.herokuapp.com/";
  const URL2 = "https://plantdatabase.herokuapp.com/blogs/";
  const detailsURL = "https://perenual.com/api/species/details/";

  const [blogs, setblog] = useState(null);


// Function to get Blogs

const getblogs = async () => {
  // make api call and get response
  const response = await fetch(URL2);
  // turn response into javascript object
  const data = await response.json();
  console.log(data);

  // set the about state to the data
  setblog(data.data);
};


//Function to create Blogs

const createBlog = async (blogForm) => {
    console.log(blogForm)
    await fetch((URL2), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogForm),

    })
    getblogs()
    console.log(blogForm)
  }

  //Update Blogs

  const updateBlogs = async (blog, id) => {
    console.log(blog)
    // make post request to create blog
    await fetch((URL2 + id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    console.log(blog)
    // update list of blog
    getblogs();
  };


  //Delete Blog

  const deleteBlog = async (id) => {
    await fetch((URL2 + id), {
        method: "DELETE",
    });
    // delete blog
    getblogs();
  };


  useEffect(() => {
    getblogs();
  }, []);
  
  

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/plants" element={<Index blogs={blogs}/>} />
        <Route exact path="/show/:id" element={<Show URL={URL} detailsURL={detailsURL} />}/>
        <Route exact path="/blogs" element={<Blogs blogs={blogs}/>} />
        <Route exact path="/blogs/:id" element={<BlogsShow blogs={blogs} deleteBlog={deleteBlog}/>} />
        <Route exact path="/new" element={<NewPage blogs={blogs} createBlog={createBlog} />} />
        <Route exact path="/edit/:id" element={<EditPage blogs={blogs} updateBlogs={updateBlogs} />} />
        <Route exact path="/mycollection" element={<Collections />} />
      </Routes>
    </main>
  );
};

export default Main;
