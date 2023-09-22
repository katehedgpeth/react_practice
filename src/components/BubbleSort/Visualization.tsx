import { FC } from "react";
import { State } from "./types";

interface Props {
  state: State;
}

interface BarProp {
  val: number;
  moved: boolean;
  evaluated: boolean;
}

const barColor = ({ evaluated }: BarProp) => (evaluated ? "red" : "#ccc");

const Bar: FC<BarProp> = (props) => (
  <div
    style={{
      width: "100px",
      marginLeft: "5px",
      marginRight: "5px",
      backgroundColor: barColor(props),
      opacity: props.moved || props.evaluated ? 1 : 0.5,
      height: props.val * 10
    }}
  ></div>
);

const Visualization: FC<Props> = ({ state: { steps, currentStepIdx } }) => {
  const currentStep = steps[currentStepIdx];
  if (!currentStep) throw new Error("current step doesn't exist!");

  return (
    <div className="flex items-end">
      {currentStep.numbers.map((val, idx) => (
        <Bar
          val={val}
          moved={currentStep.moved && currentStep.evaluated === idx}
          evaluated={currentStep.evaluated === idx}
          key={`${val}${idx}`}
        />
      ))}
    </div>
  );
};

export default Visualization;
