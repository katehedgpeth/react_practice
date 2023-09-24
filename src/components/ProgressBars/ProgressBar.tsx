import { FC } from "react";

interface Props {
  state: State;
}

export interface State {
  pctComplete: number;
  startTime: number;
  idx: number;
}

const ProgressBar: FC<Props> = ({ state }) => {
  return (
    <div
      className="my-4 border-2 border-fuchsia-500"
      style={{ border: "1px solid magenta", width: "100%" }}
    >
      <div
        className="bg-fuchsia-500"
        style={{
          background: "magenta",
          width: `${state.pctComplete}%`,
          height: "20px",
          border: "1px solid magenta"
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
