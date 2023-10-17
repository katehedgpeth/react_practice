/* eslint-disable tailwindcss/no-custom-classname */

import { FC, useCallback, useRef, useState } from "react";
import Selected from "./Selected";
import Item from "./Item";
import { State, IItem } from "./types";

interface Props {
  items: IItem[];
}

const List: FC<Props> = ({ items }) => {
  const [selected, setSelected] = useState<State>(new Set());
  const renderCounter = useRef(0);
  renderCounter.current++;

  const onChange = useCallback(
    (name: string, isSelected: boolean) => {
      setSelected((s) => {
        if (isSelected) {
          s.add(name);
        } else {
          s.delete(name);
        }
        return new Set(s);
      });
    },
    [setSelected]
  );

  return (
    <div>
      {renderCounter.current} renders
      <main className="List__container">
        <Selected selected={selected} />
        <div className="List" role="list">
          {items.map((item) => (
            <Item
              key={item.name}
              item={item}
              isSelected={selected.has(item.name)}
              setSelected={onChange}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default List;
