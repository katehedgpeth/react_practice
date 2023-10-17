import { FC, useMemo, useState } from "react";
import Tab from "./Tab";

interface Props {
  initial: string;
  components: Record<string, FC>;
}

const Tabs: FC<Props> = ({ components, initial }) => {
  const [selected, setSelected] = useState(initial);
  const names = useMemo(() => Object.keys(components), [components]);
  const Component = components[selected];
  return (
    <div className="grid grid-cols-12">
      <nav className="col-span-3">
        {names.map((name) => (
          <Tab
            name={name}
            setSelected={setSelected}
            isSelected={name === selected}
            key={name}
          />
        ))}
      </nav>
      <section className="col-span-9 p-10">
        <Component />
      </section>
    </div>
  );
};

export default Tabs;
