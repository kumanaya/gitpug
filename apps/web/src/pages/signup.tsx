import React from "react";
import Logo from "../assets/images/logo.svg";
import Input from "../components/ui/input";
import Button from "../components/button/button";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import signupValidation from "../validations/signup.validation";
import { useForm } from "react-hook-form";
import api from "../services/api";

interface ISignup {
  username: string;
  email: string;
  password: string;
}

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: zodResolver(signupValidation),
  });

  const onSubmit = async (data: ISignup) => {
    try {
      await api.post("/user", data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    navigate("/login");
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <div className="bg-custombg min-h-screen flex items-center justify-center">
      <div className="">
        <div className="grid gap-4">
          <div className="mb-4">
            <img
              src={Logo}
              width={50}
              height={50}
              alt="Logo do App"
              className="mx-auto mb-4"
            />
            <h1 className="text-center text-white">Signup into to GitPug</h1>
          </div>
          <form
            className="bg-customcardbg border border-customborder rounded p-4"
            onSubmit={handleFormSubmit}
          >
            <Input
              register={register}
              name="username"
              label="Username"
              error={errors?.username}
            />
            <Input
              register={register}
              name="email"
              label="Email"
              error={errors?.email}
            />
            <Input
              register={register}
              name="password"
              type="password"
              label="Password"
              error={errors?.password}
            />
            <div className="flex justify-between items-center mt-4">
              <div className="w-full mb-4 text-center">
                <button
                  className="text-sm text-red-500 cursor-pointer"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
              <div className="w-full">
                <Button
                  text="Create"
                  color="bg-customgreen"
                  onClick={handleFormSubmit}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
