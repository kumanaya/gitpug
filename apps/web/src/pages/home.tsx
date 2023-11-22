import React, { useEffect, useState } from "react";
import Input from "../components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import IUser from "../interfaces/user.interface";
import { useDispatch } from "react-redux";

import { storeProfileValues } from "../redux/profileSlice";
import { addToHistory } from "../redux/historySlice";

const Header: React.FC = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    if (getUser) {
      setUser(JSON.parse(getUser));
    }
  }, []);

  return (
    <div className="header bg-customheaderbg h-16 flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src={user?.avatar_url}
          alt="Profile Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-white">{user?.username}</span>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await api.get(`/user/${data.username}`);

      dispatch(storeProfileValues(response.data));
      dispatch(
        addToHistory({
          username: data.username,
          status: "Success",
          public_repos: response.data.public_repos,
        })
      );

      navigate("profile");
    } catch (error) {
      console.error(error);
      dispatch(
        addToHistory({
          username: data.username,
          status: "Failed",
          public_repos: 0,
        })
      );
    }
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  const handleHistory = () => {
    navigate("history");
  };

  return (
    <>
      <Header />
      <div className="bg-custombg min-h-screen flex items-center justify-center">
        <div>
          <form className="grid gap-4" onSubmit={handleFormSubmit}>
            <Input register={register} name="username" label="Find User" />
          </form>
          <div className="bg-customcardbg border border-customborder rounded p-4 text-center">
            <span
              className="text-sm  text-sky-600 cursor-pointer"
              onClick={handleHistory}
            >
              History
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
