const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  const end = props.end;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>}
        </div>
      ))}
      <button>{end}</button>
    </div>
  );
};

export default BlogList;
