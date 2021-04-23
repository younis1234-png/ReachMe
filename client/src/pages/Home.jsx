import React from "react";

export default function Home() {
  return (
    <div className="home">
      {/* post card */}
      <div className="card home__card">
        <h5>Younis</h5>
        <div className="card-image">
          <img
            alt="home img"
            src="https://images.unsplash.com/photo-1616474648384-9e956216d1b7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          />
        </div>
        {/* icons */}
        <div className="card-content">
          <i className="material-icons">favorite</i>
          <i className="material-icons">favorite</i>
          <h6>title</h6>
          <p>This is an amzing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
}
