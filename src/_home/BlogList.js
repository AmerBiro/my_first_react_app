const BlogList = ({blogs, top, deleteBlog}) => {
// const BlogList = (props) => {
  // const blogs = props.blogs;
  // const top = props.top;
  // const bottom = props.bottom;

  return (
    <div className="blog-list">
      <h3>{top}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          {/* <button onClick={() => deleteBlog(blog.id)}>Delete blog</button> */}
          {/* TODO: add delete function to the button */}
        </div>
      ))}
      {/* <button>{bottom}</button> */}
    </div>
  );
};

export default BlogList;
