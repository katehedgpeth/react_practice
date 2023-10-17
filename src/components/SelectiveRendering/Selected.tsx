/* eslint-disable tailwindcss/no-custom-classname */
import { FC } from "react";

interface Props {
  selected: Set<string>;
}

const Selected: FC<Props> = ({ selected }) => {
  return (
    <div className="Selected">
      <h2 className="Selected__title">Selected:</h2>
      {selected.size ? (
        <ul>
          {Array.from(selected.values()).map((name) => (
            <li className="Selected__name" key={`selected-${name}`}>
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="Selected__none">None</p>
      )}
    </div>
  );
};

export default Selected;
