import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import IUser from "../interfaces/user.interface";

interface UserSliceState {
  profile: IUser;
}

const LOCAL_STORAGE_KEY = "user";

// Função para obter o perfil inicial
function getInitialProfile(): IUser {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

  return savedData ? JSON.parse(savedData) : getEmptyProfile();
}

// Função para obter um perfil vazio
function getEmptyProfile(): IUser {
  return {
    id: 0,
    username: "",
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

const initialState: UserSliceState = {
  profile: getInitialProfile(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUserValues: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload;
    },
  },
});

export const { storeUserValues } = userSlice.actions;

export const getUserValues = (state: RootState) => state.user;

export default userSlice.reducer;
