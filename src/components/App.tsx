import TrafficLight from "./TrafficLight/TrafficLight";
import BubbleSort from "./BubbleSort/BubbleSort";
import DigitalClock from "./DigitalClock/DigitalClock";
import ProgressBars from "./ProgressBars/ProgressBars";
import Tabs from "./Tabs/Tabs";
import { FC } from "react";

const COMPONENTS: Record<string, FC> = {
  "Traffic Light": TrafficLight,
  "Bubble Sort": BubbleSort,
  "Digital Clock": DigitalClock,
  "Progress Bars": ProgressBars
};

function App() {
  return <Tabs components={COMPONENTS} initial="Traffic Light" />;
}

export default App;
