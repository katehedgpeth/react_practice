import { Dispatch, SetStateAction } from "react";

export interface State {
  hour: number;
  minute: number;
  seconds: number;
  isSet: boolean;
  secondsIntervalId: number;
  blink: boolean;
  blinkIntervalId: number;
}

export type SetState = Dispatch<SetStateAction<State>>;
