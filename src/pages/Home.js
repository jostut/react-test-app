import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Title Blah",
      desc: "Descriptions Blah",
    },
    {
      id: 2,
      title: "Title Blah",
      desc: "Descriptions Blah",
    },
    {
      id: 3,
      title: "Title Blah",
      desc: "Descriptions Blah",
    },
    {
      id: 4,
      title: "Title Blah",
      desc: "Descriptions Blah",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
