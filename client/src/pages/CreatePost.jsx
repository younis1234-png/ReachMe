import React from "react";

const CreatePost = () => {
  return (
    <div
      className="card input-filed "
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      {/* upload filed */}
      <div className="file-field input-field">
        <div className="btn">
          <span>Upload Image</span>
          <input type="file" multiple />
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Upload one or more files"
          />
        </div>
      </div>
      <button className="btn waves-effect waves-light">SUBMIT POST</button>
    </div>
  );
};

export default CreatePost;
