import { FC } from "react";
import { Color } from "./types";

interface LightProps {
  color: Color;
  on: boolean;
}

const Light: FC<LightProps> = ({ color, on }) => {
  return (
    <div
      style={{
        background: color,
        width: "100px",
        height: "100px",
        borderRadius: "100px",
        opacity: on ? 1 : 0.15
      }}
    ></div>
  );
};

export default Light;
