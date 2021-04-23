import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "QuickShare");
    data.append("cloud_name", "dgrfbxcg3333");
    fetch(" https://api.cloudinary.com/v1_1/dgrfbxcg3333/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // the image url
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });

    // createpost
    fetch("/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title: title,
        body: body,
        photo: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          return M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({
            html: "Created poste successfuly",
            classes: "#43a047 green darken-1",
          });
          // after user signup we can navigate them to our login
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {/* upload filed */}
      <div className="file-field input-field">
        <div className="btn">
          <span>Upload Image</span>
          <input
            type="file"
            multiple
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Upload one or more files"
          />
        </div>
      </div>
      <button className="btn waves-effect waves-light" onClick={postDetails}>
        SUBMIT POST
      </button>
    </div>
  );
};

export default CreatePost;
