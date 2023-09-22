import TrafficLight from "./TrafficLight/TrafficLight";
import BubbleSort from "./BubbleSort/BubbleSort";
import { FC, PropsWithChildren } from "react";
import DigitalClock from "./DigitalClock/DigitalClock";

const Component: FC<PropsWithChildren> = ({ children }) => (
  <div style={{ margin: "100px 50px" }}>{children}</div>
);

function App() {
  return (
    <div>
      <Component>
        <DigitalClock />
      </Component>
      <Component>
        <BubbleSort />
      </Component>
      <Component>
        <TrafficLight />
      </Component>
    </div>
  );
}

export default App;
