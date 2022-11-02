import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {

  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      <h2>Home Page</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          bottom={"Next page"}
        />
      )}
    </div>
  );
};

export default Home;