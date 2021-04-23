import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.posts);
        setData(result.posts);
      });
  }, []);

  

  return (
    <div className="home">
      {data.map((item) => {
        // console.log(item.postedBy.name);
        return (
          <div key={item._id} className="card home__card">
            <h5>
              {!item.postedBy.name
                ? item.postedBy.name == "no name"
                : item.postedBy.name}
            </h5>
            <div className="card-image">
              <img alt="home img" src={item.photo} />
            </div>
            {/* icons */}
            <div className="card-content">
              <i className="material-icons">favorite</i>
              <i className="material-icons">favorite</i>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
