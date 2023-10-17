import { FC } from "react";

import TrafficLight from "./TrafficLight/TrafficLight";
import BubbleSort from "./BubbleSort/BubbleSort";
import DigitalClock from "./DigitalClock/DigitalClock";
import ProgressBars from "./ProgressBars/ProgressBars";
import Tabs from "./Tabs/Tabs";
import SelectiveRendering from "./SelectiveRendering/SelectiveRendering";

const COMPONENTS: Record<string, FC> = {
  "Traffic Light": TrafficLight,
  "Bubble Sort": BubbleSort,
  "Digital Clock": DigitalClock,
  "Progress Bars": ProgressBars,
  "Selective Rendering": SelectiveRendering
};

function App() {
  return <Tabs components={COMPONENTS} initial="Selective Rendering" />;
}

export default App;
