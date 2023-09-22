import { FC } from "react";

interface Props {
  text: string;
  onClick(): void;
}

const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="rounded-full bg-slate-100 px-8 py-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
