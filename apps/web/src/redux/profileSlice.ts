import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import IUser from "../interfaces/user.interface";

interface ProfileSliceState {
  profile: IUser;
}

const LOCAL_STORAGE_KEY = "profile";

// Função para obter o perfil inicial
function getInitialProfile(): IUser {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  return savedData ? JSON.parse(savedData) : getEmptyProfile();
}

// Função para obter um perfil vazio
function getEmptyProfile(): IUser {
  return {
    id: 0,
    login: "",
    name: "",
    email: "",
    avatar_url: "",
    bio: "",
    twitter: "",
    company: "",
    blog: "",
    followers: 0,
    following: 0,
    public_repos: 0,
    repos: [],
  };
}

const initialState: ProfileSliceState = {
  profile: getInitialProfile(),
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    storeProfileValues: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
    },
  },
});

export const { storeProfileValues } = profileSlice.actions;

export const getProfileValues = (state: RootState) => state.profile;

export default profileSlice.reducer;
