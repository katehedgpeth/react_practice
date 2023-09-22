import { Step } from "./createSteps";

export interface State {
  currentStepIdx: number;
  steps: Step[];
  timeoutId: number;
}
