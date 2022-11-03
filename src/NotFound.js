import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>This page cannot be found</p>
      <Link to={"/"}>
        <p>Back to home page</p>
      </Link>
    </div>
  );
};

export default NotFound;
