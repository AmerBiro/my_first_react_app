import { useState } from "react";

const Home = () => {
  {
    /*   let [name, setName] = useState("Amer");

  let [status, setStatus] = useState(false);
  let [num, setNum] = useState();

  const clickButton = (e) => {
    console.log("Hello user", e);
  };

  const clickMeAgain = (name, e) => {
    console.log(name, e);
  };

  const changeName = (name) => {
    setName("new name");
  };

  const changeStatus = (num) => {
    if (status == false) {
      setNum(0);
      setStatus(true);
    } else {
      setNum(1);
      setStatus(false);
    }
  }; */
  }

  const [blogs, setBlogs] = useState([
     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  return (
    <div className="home">
      <h2>Home Page</h2>
     
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>

      ))}

      {/*         <button onClick={clickButton}>Click me</button>

      <button
        onClick={(e) => {
          clickMeAgain("clicked agian", e.shiftKey);
        }}
      >
        click me again
      </button>

      <p>{name}</p>
      <button onClick={changeName}>change name</button>

      <p>Status = {num}</p>
      <button onClick={changeStatus}>change status</button> */}
    </div>
  );
};

export default Home;
