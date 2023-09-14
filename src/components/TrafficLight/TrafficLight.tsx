import { FC, useCallback, useEffect, useState } from "react";
import { Color, State } from "./types";
import Light from "./Light";
import Controls, { Action } from "./Controls";

const INTERVALS = {
  red: 3_000,
  green: 2_000,
  yellow: 3_000
};

export const ORDER: Color[] = ["red", "green", "yellow"];

const nextLightIdx = (currentLight: number): number =>
  currentLight + 1 === ORDER.length ? 0 : currentLight + 1;

const TrafficLight: FC = () => {
  const [state, setState] = useState<State>({ on: 0, timeout: 0 });

  const onClickButton = useCallback(
    (action: Action) => {
      switch (action) {
        case "start":
          !state.timeout &&
            setState((s) => ({
              ...s,
              on: nextLightIdx(s.on)
            }));
          return;

        case "stop":
          window.clearTimeout(state.timeout);
          setState((s) => ({
            ...s,
            timeout: 0
          }));
          return;
      }
    },
    [state]
  );

  useEffect(() => {
    setState((s) => ({
      ...s,
      timeout: window.setTimeout(
        () =>
          setState((s) => ({
            ...s,
            on: nextLightIdx(s.on)
          })),
        INTERVALS[ORDER[s.on]]
      )
    }));
  }, [state.on]);

  return (
    <div style={{ maxWidth: "250px" }}>
      <div
        className="flex flex-col"
        style={{
          width: "120px",
          padding: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
          backgroundColor: "black"
        }}
      >
        {[0, 2, 1].map((i) => (
          <Light color={ORDER[i]} on={state.on === i} key={i} />
        ))}
      </div>
      <Controls state={state} onClickButton={onClickButton} />
    </div>
  );
};

export default TrafficLight;
