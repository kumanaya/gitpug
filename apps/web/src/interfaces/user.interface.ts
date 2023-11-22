import IRepository from "./repository.interface";

interface IUser {
  id: number;
  username?: string;
  login?: string;
  name: string;
  email: string;
  avatar_url: string;
  bio: string;
  twitter: string | null;
  company: string | null;
  blog: string | null;
  followers: number;
  following: number;
  public_repos: number | any;
  repos: IRepository[];
}

export default IUser;
