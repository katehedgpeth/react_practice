import { FC } from "react";

interface ButtonProps {
  text: "start" | "stop";
  onClick(): void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ disabled, text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-full"
    style={{
      opacity: disabled ? 0.2 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      padding: "10px",
      border: "1px solid gray"
    }}
  >
    {text} cycle
  </button>
);

export default Button;
