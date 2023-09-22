import { FC, useEffect, useState } from "react";
import Digit from "./Digit";
import Colon from "./Colon";
import Buttons from "./Buttons";
import { SetState, State } from "./types";

const WIDTH = 400;

type Time = [number, number, number];

const getTime = (date: Date): Time =>
  date
    .toLocaleTimeString("en-US", { hourCycle: "h12" })
    .split(" ")
    .at(0)!
    .split(":")
    .map((i) => parseInt(i, 10)) as Time;

const updateTime = (state: State): State => {
  const time = new Date();
  time.setHours(state.hour);
  time.setMinutes(state.minute);
  time.setSeconds(state.seconds + 1);
  const [hour, minute, seconds] = getTime(time);
  return {
    ...state,
    hour,
    minute,
    seconds
  };
};

const initialState = () => {
  const [hour, minute, seconds] = getTime(new Date());
  return {
    hour,
    minute,
    seconds,
    secondsIntervalId: 0,
    isSet: true,
    blink: false,
    blinkIntervalId: 0
  };
};

const startSecondsInterval = (setState: SetState): void => {
  setState((state) => ({
    ...state,
    secondsIntervalId: window.setInterval(
      () => setState((s) => updateTime(s)),
      1_000
    )
  }));
};

const onSetTime = (setState: SetState): void => {
  setState((state) => ({ ...state, isSet: true }));
  startSecondsInterval(setState);
};

const AnalogClock: FC = () => {
  const [state, setState] = useState<State>(initialState());

  useEffect(() => {}, [state.isSet, state.secondsIntervalId]);

  useEffect(() => {
    setState((s) => ({
      ...s,
      blinkInterval: window.setInterval(() => {
        setState((s) => ({ ...s, blink: !s.blink }));
      }, 1_000)
    }));
    startSecondsInterval(setState);
  }, []);

  useEffect(() => {
    return () => {
      window.clearInterval(state.secondsIntervalId);
      window.clearInterval(state.blinkIntervalId);
    };
  }, [state.secondsIntervalId, state.blinkIntervalId]);

  const { hour, minute, seconds } = state;

  const maybeBlinkingNum = (num: number | null) =>
    !state.isSet && state.blink ? null : num;

  return (
    <div className="flex">
      <div
        style={{
          borderRadius: "20px",
          width: WIDTH * 2 + "px",
          height: WIDTH / 2 + "px",
          background: "#000",
          color: "lime",
          textAlign: "center",
          fontSize: "1em",
          display: "flex"
        }}
      >
        <div style={{ marginRight: "30px", display: "flex" }}>
          <Digit num={maybeBlinkingNum(hour > 9 ? 1 : null)} />
          <Digit num={maybeBlinkingNum(hour > 9 ? hour - 10 : hour)} />
        </div>
        <Colon blink={state.blink} />
        <div style={{ marginRight: "30px", display: "flex" }}>
          <Digit num={maybeBlinkingNum(Math.floor(minute / 10))} />
          <Digit num={maybeBlinkingNum(minute % 10)} />
        </div>
        <Colon blink={state.blink} />
        <div style={{ marginRight: "30px", display: "flex" }}>
          <Digit num={maybeBlinkingNum(Math.floor(seconds / 10))} />
          <Digit num={maybeBlinkingNum(seconds % 10)} />
        </div>
      </div>
      <Buttons state={state} setState={setState} onSetTime={onSetTime} />
    </div>
  );
};

export default AnalogClock;
