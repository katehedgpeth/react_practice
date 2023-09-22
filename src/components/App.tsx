import TrafficLight from "./TrafficLight/TrafficLight";
import BubbleSort from "./BubbleSort/BubbleSort";
import { FC, PropsWithChildren } from "react";

const Component: FC<PropsWithChildren> = ({ children }) => (
  <div style={{ margin: "100px 50px" }}>{children}</div>
);

function App() {
  return (
    <div>
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
