import { useContext } from "react";
import { NameContext } from "~/stores/name/context";

export function Sibling() {
  const {
    state: { name },
    dispatch,
  } = useContext(NameContext);
  return (
    <div className="p-5 bg-green-400">
      <div>Sibling Component, {name}</div>
      <button
        className="bg-green-700 p-2"
        onClick={() =>
          dispatch({
            type: "student",
            gender: "female",
          })
        }
      >
        Set New Name
      </button>
    </div>
  );
}
