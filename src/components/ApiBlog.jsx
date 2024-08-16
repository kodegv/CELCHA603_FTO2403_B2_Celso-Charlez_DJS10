// Imports react funtions
import { useState, useEffect } from "react";

// Imports api call funtion
import { getBlogs } from "./api";

// Main blog component
export default function ApiBlog() {
  // Declares useStates
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   Calls and sets useState data
  useEffect(() => {
    async function loadBlogs() {
      setLoading(true);
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  //   Maps over blogs to create blog elements
  const blogElements = blogs?.map((blog) => {
    return (
      <div key={blog.id}>
        <h1>
          <span>{blog.id}.</span> {blog.title}
        </h1>
        <p>{blog.body}</p>
      </div>
    );
  });

  //   Displays loading
  if (loading) {
    return <h1>Loading...</h1>;
  }

  //   Early return if theres an error
  if (error) {
    return <h1>{error.message}</h1>;
  }

  //   Returns blogs if there are no errors
  return (
    <>
      <h1>Posts</h1>
      <div>{blogElements}</div>
    </>
  );
}
