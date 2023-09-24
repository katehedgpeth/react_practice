import { FC, useEffect, useState } from "react";
import ProgressBar, { State as BarState } from "./ProgressBar";

interface State {
  activeBar: number;
  barStates: Array<BarState>;
  intervalId: number;
  isPaused: boolean;
}

const updatePct = (bar: BarState): BarState => {
  const remaining = 100 - bar.pctComplete;
  const add = (remaining / 3) * Math.random();
  return {
    ...bar,
    pctComplete: remaining < 10 ? 100 : bar.pctComplete + add
  };
};

const updateBars = (state: State): State => {
  const { activeBar, barStates } = state;
  const bar = barStates[activeBar];
  if (!bar) {
    return state;
  }

  const updated = updatePct(bar);
  barStates[activeBar] = updated;

  return {
    ...state,
    activeBar: updated.pctComplete === 100 ? activeBar + 1 : activeBar
  };
};

const DEFAULT_STATE: State = {
  activeBar: 0,
  barStates: [{ pctComplete: 1, startTime: Date.now(), idx: 0 }],
  intervalId: 0,
  isPaused: false
};

const BUTTON_CLASS = "inline-block border-2 border-black p-4 mr-2 mt-2";

const ProgressBars: FC = () => {
  const [state, setState] = useState<State>(DEFAULT_STATE);

  const startInterval = () => {
    const intervalId = window.setInterval(() => setState(updateBars), 200);
    setState((s) => ({
      ...s,
      intervalId
    }));
  };

  const addBar = () => {
    setState((s) => {
      return {
        ...s,
        barStates: [
          ...s.barStates,
          { pctComplete: 0, startTime: Date.now(), idx: s.barStates.length }
        ]
      };
    });
    if (!state.intervalId) startInterval();
  };

  const pause = () => {
    window.clearInterval(state.intervalId);
    setState((s) => ({
      ...s,
      intervalId: 0
    }));
  };

  const reset = () => {
    window.clearInterval(state.intervalId);
    setState(DEFAULT_STATE);
  };

  useEffect(() => {
    return () => window.clearInterval(state.intervalId);
  }, [state.intervalId]);

  return (
    <div>
      {state.barStates.map((bar) => (
        <ProgressBar state={bar} key={bar.idx} />
      ))}
      <div>
        <button type="button" onClick={addBar} className={BUTTON_CLASS}>
          Add
        </button>
        <button type="button" onClick={startInterval} className={BUTTON_CLASS}>
          Start
        </button>
        <button type="button" onClick={pause} className={BUTTON_CLASS}>
          Pause
        </button>
        <button type="button" onClick={reset} className={BUTTON_CLASS}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBars;
