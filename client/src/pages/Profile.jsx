import React from "react";

const Profile = () => {
  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "30px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid gray",
        }}
      >
        {/* user image */}
        <div>
          <img
            alt="user img"
            src="https://images.unsplash.com/photo-1617505177981-ebde2ad0eca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
          />
        </div>

        {/* user info */}
        <div>
          <h4>Younis Saleh</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>

      {/* content for user */}
      <div className="gallery">
        <img
          alt="gallery"
          src="https://images.unsplash.com/photo-1617505177981-ebde2ad0eca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          className="item"
        />
        <img
          alt="gallery"
          src="https://images.unsplash.com/photo-1617505177981-ebde2ad0eca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          className="item"
        />
        <img
          alt="gallery"
          src="https://images.unsplash.com/photo-1617505177981-ebde2ad0eca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          className="item"
        />
        <img
          alt="gallery"
          src="https://images.unsplash.com/photo-1617505177981-ebde2ad0eca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          className="item"
        />
        <img
          alt="gallery"
          src="https://images.unsplash.com/photo-1617505177981-ebde2ad0eca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          className="item"
        />
        <img
          alt="gallery"
          src="https://images.unsplash.com/photo-1617505177981-ebde2ad0eca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          className="item"
        />
      </div>
    </div>
  );
};

export default Profile;
