import React from "react";
import Logo from "../assets/images/logo.svg";
import Input from "../components/ui/input";
import Button from "../components/button/button";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidation from "../validations/login.validation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../contexts/auth.context";
import { useDispatch } from "react-redux";
import { storeUserValues } from "../redux/userSlice";

interface ILogin {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const authContext = useAuth();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginValidation),
  });

  const onSubmit = async (data: ILogin) => {
    try {
      const response = await api.post("/auth", data);

      const { user, token } = response.data;

      authContext.login(user, token, () => {
        dispatch(storeUserValues(response.data));
        navigate("/");
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <div className="bg-custombg min-h-screen flex items-center justify-center">
      <div className="">
        <div className="grid gap-4">
          <div className="mb-4 text-center">
            <img
              src={Logo}
              width={50}
              height={50}
              alt="Logo do App"
              className="mx-auto mb-4"
            />
            <h1 className="text-white">Sign into GitPug</h1>
          </div>
          <form
            className="bg-customcardbg border border-customborder rounded p-4"
            onSubmit={handleFormSubmit}
          >
            <Input
              register={register}
              name="username"
              label="Email"
              error={errors?.username}
            />
            <Input
              register={register}
              name="password"
              type="password"
              label="Password"
              error={errors?.password}
            />
            <Button
              text="Sign in"
              color="bg-customgreen"
              onClick={handleFormSubmit}
            />
          </form>
          <div className="bg-customcardbg border border-customborder rounded p-4">
            <span className="text-sm text-white">
              New to GitPug?{" "}
              <span
                className="text-sm text-sky-600 cursor-pointer"
                onClick={handleSignup}
              >
                Create an account
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
