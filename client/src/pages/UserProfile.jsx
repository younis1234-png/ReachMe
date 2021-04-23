import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [myPost, setMyPost] = useState([]);
  const [userProfile, setProfile] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();

  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.posts);
        setProfile(result.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {userProfile ? (
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
            <div>
              <img
                alt="user img"
                src="https://images.unsplash.com/photo-1617505177981-ebde2ad0eca4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
              />
            </div>

            <div>
              <h4>{state ? state.name : <h3>"Loading...."</h3>}</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h6>{userProfile.length} Posts</h6>
                <h6>3 followers</h6>
                <h6>2 following</h6>
              </div>
            </div>
          </div>
          <div className="gallery">
            {userProfile.map((item) => {
              return (
                <img
                  key={item._id}
                  alt={item.title}
                  src={item.photo}
                  className="item"
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};

export default UserProfile;
