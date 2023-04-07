import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BlogsShow(props) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const getBlogs = async () => {

    const details = `${props.URL}${id}`;

    const response = await fetch(details);
    const data = await response.json();
    console.log(data); // Add this line to see the response data
    setBlog(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>

    </div>
  );
}

export default BlogsShow;