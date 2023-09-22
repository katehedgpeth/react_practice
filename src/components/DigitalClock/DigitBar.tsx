import { CSSProperties, FC } from "react";

interface Props {
  on: boolean;
  direction: "horizontal" | "vertical";
}

export const HEIGHT = 50 / 4;
export const WIDTH = 200 / 4;

export const px = (num: number) => `${num}px`;

type PointDirection = "up" | "down" | "right" | "left";

interface EndCapProps {
  on: boolean;
  direction: PointDirection;
}

const oppositePointDirection = (dir: PointDirection): PointDirection => {
  if (dir === "down") return "up";
  if (dir === "up") return "down";
  if (dir === "left") return "right";
  if (dir === "right") return "left";

  throw new Error(`unknown direction: ${dir}`);
};

const EndCap: FC<EndCapProps> = ({ direction, on }) => {
  const borderColor = (dir: PointDirection) => {
    if (!on) return undefined;
    const color =
      dir === oppositePointDirection(direction) ? "lime" : "transparent";
    return direction === dir ? undefined : `${HEIGHT / 2}px solid ${color}`;
  };

  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: borderColor("left"),
        borderRight: borderColor("right"),
        borderTop: borderColor("up"),
        borderBottom: borderColor("down")
      }}
    ></div>
  );
};

const DigitBar: FC<Props> = ({ on, direction }) => {
  const style: CSSProperties = {
    background: on ? "lime" : undefined,
    height: direction === "horizontal" ? px(HEIGHT) : px(WIDTH),
    width: direction === "horizontal" ? px(WIDTH) : px(HEIGHT)
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row"
      }}
    >
      <EndCap on={on} direction={direction === "horizontal" ? "left" : "up"} />
      <div style={style}></div>
      <EndCap
        on={on}
        direction={direction === "horizontal" ? "right" : "down"}
      />
    </div>
  );
};

export default DigitBar;
