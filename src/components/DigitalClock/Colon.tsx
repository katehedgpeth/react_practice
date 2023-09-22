import { FC } from "react";

interface Props {
  blink: boolean;
}

const DIAMETER = "12px";

const Dot: FC<Props> = ({ blink }) => {
  return (
    <div
      style={{
        background: blink ? "none" : "lime",
        width: DIAMETER,
        height: DIAMETER,
        borderRadius: DIAMETER
      }}
    />
  );
};

const Colon: FC<Props> = ({ blink }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-around"
      }}
    >
      <Dot blink={blink} />
      <Dot blink={blink} />
    </div>
  );
};

export default Colon;
