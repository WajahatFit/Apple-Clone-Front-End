import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoggedIn() {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    _id: "",
    iat: "",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/auth/me"
        );
        setUserData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <input type="file">
        <img src={userData.profilePic} alt={userData.username} />
      </input>
      <h2>{userData.name}</h2>
      <div>
        <form>
          <input type="text" name="email" value={userData.email} />
          <input type="text" name="username" value={userData.username} />
        </form>
      </div>
      <p>Account ID: {userData._id}</p>
      <p>Client since {userData.iat}</p>
    </>
  );
}
