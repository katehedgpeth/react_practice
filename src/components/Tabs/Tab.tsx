import { Dispatch, FC, SetStateAction, useMemo } from "react";

interface Props {
  name: string;
  isSelected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Tab: FC<Props> = ({ setSelected, name, isSelected }) => {
  const className = useMemo(() => {
    const base = ["border", "p-10"];
    for (const cls of ["bg-blue-500", "text-white"]) {
      isSelected && base.push(cls);
    }
    return base.join(" ");
  }, [isSelected]);

  return (
    <div className={className} onClick={() => setSelected(name)}>
      {name}
    </div>
  );
};

export default Tab;
