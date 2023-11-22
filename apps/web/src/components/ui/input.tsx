import { FieldError } from "react-hook-form";

interface InputProps {
  register?: any;
  type?: string;
  name: string;
  label: string;
  error?: FieldError;
}

const Input: React.FC<InputProps> = ({
  register,
  type = "text",
  name,
  label,
  error = false,
}) => {
  const isError = typeof error === "object" && !!error;

  return (
    <div className="pb-4">
      <label className="text-sm block mb-2 font-normal text-white">
        {label}
      </label>
      <input
        {...register(name)}
        className="border border-customborder bg-custombg text-sm text-white w-full h-9 p-2"
        type={type}
      />
      {isError && "message" in error && error.message && (
        <p className={`mt-2 text-sm text-red-500`}>{error.message}</p>
      )}
    </div>
  );
};

export default Input;
