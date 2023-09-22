import { FC, useEffect, useState } from "react";
import Visualization from "./Visualization";
import Controls from "./Controls";
import { State } from "./types";
import createSteps from "./createSteps";

const BubbleSort: FC = () => {
  const [state, setState] = useState<State>({
    currentStepIdx: 0,
    steps: createSteps([4, 7, 2, 5, 8, 4, 1]),
    timeoutId: 0
  });

  useEffect(() => {
    if (state.timeoutId && state.currentStepIdx === state.steps.length - 1) {
      window.clearInterval(state.timeoutId);
      setState((s) => ({ ...s, timeoutId: 0 }));
    }
  }, [state]);

  return (
    <div>
      <Visualization state={state} />
      <Controls state={state} setState={setState} />
    </div>
  );
};

export default BubbleSort;
