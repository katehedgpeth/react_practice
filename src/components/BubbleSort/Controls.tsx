import React, { FC, FormEvent, SetStateAction } from "react";
import { State } from "./types";
import Button from "./Button";
import createSteps, { Step } from "./createSteps";

type Dispatch = React.Dispatch<SetStateAction<State>>;

interface Props {
  state: State;
  setState: Dispatch;
}

const INTERVAL = 200;

const nextStep = ({ currentStepIdx, steps }: State): number =>
  steps[currentStepIdx + 1] ? currentStepIdx + 1 : 0;

const prevStep = ({ currentStepIdx, steps }: State): number =>
  steps[currentStepIdx - 1] ? currentStepIdx - 1 : steps.length - 1;

const setNextStep = (setState: Dispatch) => {
  setState((s) => ({ ...s, currentStepIdx: nextStep(s) }));
};

const setPrevStep = (setState: Dispatch) => {
  setState((s) => ({ ...s, currentStepIdx: prevStep(s) }));
};

const startInterval = (state: State, setState: Dispatch): void => {
  if (state.timeoutId) return;
  const timeoutId = window.setInterval(() => setNextStep(setState), INTERVAL);
  setState((s) => ({ ...s, timeoutId }));
};

const stopInterval = (state: State, setState: Dispatch): void => {
  window.clearInterval(state.timeoutId);
  setState((s) => ({ ...s, timeoutId: 0 }));
};

const parseSteps = (str: FormDataEntryValue | null): Step[] | undefined => {
  if (str === null) throw new Error("cannot get numbers from form");
  const numbers = str
    .toString()
    .split(",")
    .map((txt) => window.parseInt(txt, 10));
  return !numbers.length || numbers.some(window.isNaN)
    ? undefined
    : createSteps(numbers);
};

const onSubmitNumbers = (
  e: FormEvent<HTMLFormElement>,
  setState: Dispatch
): void => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const steps = parseSteps(data.get("numbers"));
  if (steps) {
    setState((s) => ({
      ...s,
      steps,
      currentStepIdx: 0
    }));
  }
};

const Controls: FC<Props> = ({ state, setState }) => {
  return (
    <div>
      <div>
        <Button text="Run" onClick={() => startInterval(state, setState)} />
        <Button text="Stop" onClick={() => stopInterval(state, setState)} />
        <Button text="Prev" onClick={() => setPrevStep(setState)} />
        <Button text="Next" onClick={() => setNextStep(setState)} />
      </div>
      <div>
        <form onSubmit={(e) => onSubmitNumbers(e, setState)}>
          <label>
            Numbers (optional):{" "}
            <input
              type="text"
              name="numbers"
              className="border-black"
              style={{ borderWidth: "1px" }}
            />
          </label>
          <button type="submit">Set</button>
        </form>
      </div>
    </div>
  );
};

export default Controls;
