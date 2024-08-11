import React, { useEffect, useState } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { setContactFormOpen, setProfilePara } from '../../contextApi/expenseSlice'; 

const ProfileForm = () => {
  const idToken = useSelector((state) => state.auth.idToken);
  const dispatch = useDispatch();
  const [profileFormData, setProfileFormData] = useState({
    name: "",
    image: "",
  });

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setProfileFormData({ ...profileFormData, [name]: value });
  };

  const getProfileData = async () => {
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k",
        {
          method: "POST",
          body: JSON.stringify({ idToken }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      if (res.ok) {
        const user = data.users[0];
        setProfileFormData({
          name: user.displayName || "",
          image: user.photoUrl || "",
        });
      } else {
        throw new Error(data.error.message || "Failed to fetch profile data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idToken) {
      getProfileData();
    }
  }, [idToken]);

  const profileFormSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAALviDexVj08E56WEoeWX2oCtKXno-d1k`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken:idToken,
            displayName: profileFormData.name,
            photoUrl: profileFormData.image,
            returnSecureToken: false,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error.message || "Invalid data type");
      } else {
        alert("Profile updated successfully");
        dispatch(setProfilePara("Your Profile Has Completed")); // Update Redux state instead of context
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeFormHandler = () => {
    dispatch(setContactFormOpen(false)); // Update Redux state instead of context
  };

  return (
    <div className="w-3/4 border border-2 shadow-lg m-auto bg-pink-50 mt-7 h-max">
      <div className="flex items-center justify-between mx-2 text-xl">
        <h1>Contact Details</h1>
        <Button onClick={closeFormHandler} title="Cancel" />
      </div>
      <form onSubmit={profileFormSubmitHandler}>
        <div className="flex items-center justify-around mx-3 text-xl">
          <div className="flex mx-2">
            <label htmlFor="name" className="flex items-center mx-3">
              <FaSquareGithub /> Full Name
            </label>
            <input
              type="text"
              id="name"
              value={profileFormData.name}
              name="name"
              onChange={changeHandle}
              className="border border-gray-200"
            />
          </div>
          <div className="flex mx-2">
            <label className="flex items-center justify-between mx-3">
              <TbWorld /> Profile Photo Url
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={profileFormData.image}
              onChange={changeHandle}
              className="border border-gray-200"
            />
          </div>
        </div>

        <Button title="Update" />
      </form>
    </div>
  );
};

export default ProfileForm;
