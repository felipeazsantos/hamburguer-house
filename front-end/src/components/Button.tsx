type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "outline") {
      return "w-full cursor-pointer border border-white rounded-sm bg-white py-2 text-sm font-bold text-[#C92A0E]";
    }
    return "w-full rounded-md border border-[#C92A0E] bg-[#C92A0E] py-2 text-sm font-bold text-white";
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
