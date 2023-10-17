import { Dispatch, SetStateAction } from "react";

export interface IItem {
  name: string;
  color: string;
}

export type State = Set<string>;

export type SetState = Dispatch<SetStateAction<State>>;
