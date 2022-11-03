import { Link } from "react-router-dom";

const BlogList = ({ blogs, top, deleteBlog }) => {
  // const BlogList = (props) => {
  // const blogs = props.blogs;
  // const top = props.top;
  // const bottom = props.bottom;

  return (
    <div className="blog-list">
      <h3>{top}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
