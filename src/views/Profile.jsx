import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import userImg from "../images/undraw_male_avatar_323b.svg";
import img from "../images/undraw_develop_app_re_bi4i.svg";
import wave from "../images/wave (1).svg";

export default function Profile() {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");
  const { user, logOutUser } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    username: user.username,
    email: user.email,
    profileImage: user.profileImage,
  });

  const handleChange = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/user/edit`, userData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      toast.success("User edited successfully. Please log in again.");
      logOutUser();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  // const handleFileUpload = async (e) => {
  //   const uploadData = new FormData();
  //   uploadData.append("productImageUrl", e.target.files[0]);
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL}/auth/upload`,
  //       uploadData
  //     );
  //     console.log(response.data.fileUrl);
  //     setUserData((prev) => {
  //       return {
  //         ...prev,
  //         profilePic: response.data.fileUrl,
  //       };
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className=" bg-black font-sans flex flex-col items-center justify-around h-full md:flex-row uppercase p-12">
      <div className="w-1/2 bg-black rounded-3xl">
        <img className="w-full mx-auto my-4 lg:w-2/4" src={img} alt="mobile" />
        <img className="absolute -top-20 left-0 lg:-top-40" src={wave} alt="wave" />
      </div>
      <div className="w-1/2 flex flex-col rounded-3xl">
        <div className="flex flex-col justify-center items-center space-y-4 text-white text-3xl">
          <h2 className="">Welcome</h2>
          <h2 className="mx-auto text-xl">{userData.username}</h2>
          <img className="w-20 mx-auto" src={userImg} alt="avatar" />
        </div>
        <div></div>

        <form
          className="flex flex-col p-8 space-x-4 space-y-6 items-center md:items-start"
          onSubmit={handleSubmit}
        >
          <label className="text-xl md:2xl text-lightWhite ml-4">
            User name
          </label>
          <input
            className="rounded-2xl p-4 md:px-4 border md:w-full m-4 text-sm md:text-xl"
            required
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
          <label className="text-xl md:2xl text-lightWhite ml-4">Email</label>
          <input
            className="rounded-2xl p-4 md:px-4 border md:w-full m-4 text-sm md:text-xl"
            required
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <button
            className=" md:ml-8 bg-sky-500 p-2 w-full md:p-6  text-sm md:text-2xl text-white rounded-xl"
            type="submit"
          >
            Save changes & log out
          </button>
        </form>
      </div>
    </div>
  );
}
