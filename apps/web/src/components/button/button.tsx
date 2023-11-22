interface ButtonProps {
  color?: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ color = "green", text, onClick }) => {
  return (
    <div className="pb-4">
      <button
        className={`text-sm border rounded border-customborder flex items-center justify-center ${color} text-white w-full h-9 p-2`}
        type="submit"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
