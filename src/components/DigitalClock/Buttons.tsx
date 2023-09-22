import { FC } from "react";
import { State, SetState } from "./types";

interface Props {
  state: State;
  setState: SetState;
  onSetTime(setState: SetState): void;
}

type TimeKey = "hour" | "minute" | "seconds";

const timeButtons: TimeKey[] = ["hour", "minute", "seconds"];

const reset = (setState: SetState) => {
  setState((s) => {
    window.clearInterval(s.secondsIntervalId);
    return {
      ...s,
      isSet: false,
      hour: 12,
      minute: 0,
      seconds: 0,
      secondIntervalId: 0
    };
  });
};

const setTime = (setState: SetState, key: TimeKey): void => {
  const maxNum = key === "hour" ? 12 : 59;
  setState((state) => ({
    ...state,
    [key]: state[key] === maxNum ? 1 : state[key] + 1
  }));
};

const Buttons: FC<Props> = ({ state, setState, onSetTime }) => {
  return (
    <div className="border-2 border-black p-2">
      <button
        type="button"
        className="block"
        onClick={() => reset(setState)}
        disabled={!state.isSet}
      >
        Reset
      </button>
      {timeButtons.map((key) => (
        <button
          type="button"
          className="block"
          onClick={() => setTime(setState, key)}
          disabled={state.isSet}
          key={key}
        >
          {key.replace(key[0], key[0].toUpperCase()) + key.slice(1, 0)}
        </button>
      ))}
      <button
        type="button"
        className="block"
        onClick={() => onSetTime(setState)}
        disabled={state.isSet}
      >
        Set time
      </button>
    </div>
  );
};

export default Buttons;
