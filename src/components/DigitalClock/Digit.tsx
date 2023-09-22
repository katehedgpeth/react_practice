import { FC } from "react";
import DigitBar, { WIDTH, HEIGHT, px } from "./DigitBar";

interface Props {
  num: number | null;
}

const Spacer: FC = () => (
  <div style={{ width: px(HEIGHT), height: px(HEIGHT) }}></div>
);

const Horizontal: FC<{ on: boolean }> = ({ on }) => {
  return (
    <div style={{ display: "flex" }}>
      <Spacer />
      <DigitBar on={on} direction="horizontal" />
      <Spacer />
    </div>
  );
};

const Vertical: FC<{ leftIsOn: boolean; rightIsOn: boolean }> = ({
  leftIsOn,
  rightIsOn
}) => (
  <div
    style={{
      display: "flex",
      width: WIDTH + HEIGHT * 3,
      justifyContent: "space-between"
    }}
  >
    <DigitBar on={leftIsOn} direction="vertical" />
    <DigitBar on={rightIsOn} direction="vertical" />
  </div>
);

const Digit: FC<Props> = ({ num }) => {
  const isOn = (numberList: number[]) =>
    num !== null && numberList.includes(num);

  return (
    <div style={{ margin: "auto 10px" }}>
      <Horizontal on={isOn([0, 2, 3, 5, 6, 7, 8, 9])} />
      <Vertical
        leftIsOn={isOn([0, 4, 5, 6, 8, 9])}
        rightIsOn={isOn([0, 1, 2, 3, 4, 7, 8, 9])}
      />
      <Horizontal on={isOn([2, 3, 4, 5, 6, 8, 9])} />
      <Vertical
        leftIsOn={isOn([0, 2, 6, 8])}
        rightIsOn={isOn([0, 1, 3, 4, 5, 6, 7, 8, 9])}
      />
      <Horizontal on={isOn([0, 2, 3, 5, 6, 8, 9])} />
    </div>
  );
};

export default Digit;
