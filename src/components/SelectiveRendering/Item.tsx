/* eslint-disable tailwindcss/no-custom-classname */
import { FC, useRef, memo } from "react";
import { IItem } from "./types";

interface Props {
  item: IItem;
  isSelected: boolean;
  setSelected(name: string, isSelected: boolean): void;
}

const Item: FC<Props> = ({ item, setSelected, isSelected }) => {
  const renderCounter = useRef(0);
  renderCounter.current++;

  const selectedClass = isSelected ? " Item--selected" : "";

  // I opted to use a checkbox input for this element
  // to improve accessibility
  return (
    <div
      role="listitem"
      className={`Item Item--${item.color} ${selectedClass}`}
    >
      <label htmlFor={item.name} className="Item__label">
        {item.name} ({renderCounter.current})
      </label>
      <input
        id={item.name}
        className="Item__checkbox"
        type="checkbox"
        checked={isSelected}
        onChange={() => {
          setSelected(item.name, !isSelected);
        }}
      />
    </div>
  );
};

export default memo(Item);
