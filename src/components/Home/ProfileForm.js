import React, { useContext, useEffect, useState } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { authContext } from "../../contextApi/auth-context";
import { Context } from "../../contextApi/Context";
import Button from "../UI/Button";

const ProfileForm = () => {
  const { error,setError, idToken } = useContext(authContext);
  const { setContactFormOpen, setProfilePara } = useContext(Context);
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
      console.log(data);
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
      setError(error.message);
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
            idToken,
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
        setProfilePara("Your Profile Has Completed");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const closeFormHandler = () => {
    setContactFormOpen(false);
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
      {/* {error && <h1 className="font-bold text-3xl text-black">{error}</h1>} */}
    </div>
  );
};

export default ProfileForm;
