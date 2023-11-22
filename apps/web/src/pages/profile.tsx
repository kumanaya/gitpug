import React from "react";
import Logo from "../assets/images/logo.svg";
import Card from "../components/card";

import { FiTwitter } from "react-icons/fi";
import { MdPersonOutline, MdOutlineEmail } from "react-icons/md";
import { TiPinOutline } from "react-icons/ti";
import { LuBuilding } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";

import { getProfileValues } from "../redux/profileSlice";
import { useAuth } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { getUserValues } from "../redux/userSlice";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const authContext = useAuth();

  const profileValues = useSelector(getProfileValues);
  const userValues = useSelector(getUserValues);

  const handleLogout = () => {
    authContext.logout(() => {
      navigate("/");
    });
  };

  return (
    <div className="header bg-customheaderbg h-16 flex items-center justify-between p-4">
      <div className="flex items-center"></div>

      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-8 h-8 rounded-full" />
      </div>

      <div>
        {profileValues.profile.login === userValues.profile.username ? (
          <CiLogout
            color="white"
            onClick={handleLogout}
            className="cursor-pointer"
          />
        ) : null}
      </div>
    </div>
  );
};

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const profileValues = useSelector(getProfileValues);
  const userValues = useSelector(getUserValues);

  const handleEditClick = () => {
    navigate("/edit-profile");
  };

  console.log("checando o edit profile:");
  console.log(profileValues.profile, userValues.profile);


  return (
    <>
      <Header />
      <div className="bg-custombg min-h-screen">
        <div className="grid gap-4 p-4">
          <div className="flex items-center">
            <img
              src={profileValues.profile.avatar_url}
              alt="Profile Avatar"
              width={50}
              height={50}
              className="rounded-full mr-2"
            />
            <div className="flex flex-col">
              {profileValues.profile.login === userValues.profile.username ? (
                <div
                  className="flex gap-2 cursor-pointer"
                  onClick={handleEditClick}
                >
                  <span className="text-white font-bold">
                    {profileValues.profile.name}
                  </span>
                  <FaEdit
                    onClick={handleEditClick}
                    size={14}
                    color="white"
                    className="self-center "
                  />
                </div>
              ) : (
                <div className="flex gap-2">
                  <span className="text-white font-bold">
                    {profileValues.profile.name}
                  </span>
                </div>
              )}
              <span className="text-white">{profileValues.profile.login}</span>
            </div>
          </div>
          <div className="bg-customcardbg p-2">
            <span className="text-white">
              {profileValues.profile.bio || "No bio yet"}
            </span>
          </div>
          <div className="flex gap-3 flex-col text-white ">
            <div className="flex gap-2">
              {profileValues.profile.company ? (
                <div className="flex gap-1">
                  <LuBuilding className="self-center" />
                  <span className="font-bold">
                    {profileValues.profile.company}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="flex gap-2">
              {profileValues.profile.followers &&
              profileValues.profile.following ? (
                <div className="flex gap-1">
                  <MdPersonOutline className="self-center" />
                  <div className="flex gap-1">
                    <span className="font-bold">
                      {profileValues.profile.followers}
                    </span>
                    <span>followers</span>
                  </div>
                  {"•"}
                  <div className="flex gap-1">
                    <span className="font-bold">
                      {profileValues.profile.following}
                    </span>
                    <span>following</span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="flex gap-2">
              {profileValues.profile.twitter ? (
                <div className="flex gap-1">
                  <FiTwitter className="self-center" />
                  <span>{profileValues.profile.twitter}</span>
                </div>
              ) : null}
            </div>

            <div className="flex gap-2">
              {profileValues.profile.email ? (
                <div className="flex gap-1">
                  <MdOutlineEmail className="self-center" />
                  <span>{profileValues.profile.email}</span>
                </div>
              ) : null}
            </div>
          </div>
          <hr style={{ borderColor: "#30363D" }} />
          <div>
            <div className="flex gap-1 mb-4 text-white">
              <TiPinOutline className="self-center" />
              <div className="flex gap-1">
                <span className="font-bold">
                  {profileValues.profile.public_repos}
                </span>
                <span>Public Repos</span>
              </div>
            </div>
            <Card repositories={profileValues.profile.repos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
