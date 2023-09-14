import { FC } from "react";

import Button from "./Button";
import { State } from "./types";

export type Action = "start" | "stop";

interface Props {
  state: State;
  onClickButton(action: Action): void;
}

const Controls: FC<Props> = ({ state, onClickButton }: Props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Button
          onClick={() => {
            onClickButton("stop");
          }}
          disabled={state.timeout === 0}
          text="stop"
        />
        <Button
          onClick={() => {
            onClickButton("start");
          }}
          text="start"
          disabled={state.timeout !== 0}
        />
      </div>

      <p className="text-center">
        Cycle {state.timeout ? "running" : "stopped"}
      </p>
    </>
  );
};

export default Controls;
