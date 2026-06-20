import { Parent } from "./parent";
import { Sibling } from "./Sibling";

import { useContext } from "react";
import { NameContext } from "~/stores/name/context";

export function Welcome() {
  const {
    state: { name },
  } = useContext(NameContext);

  return (
    <div className="p-5 bg-red-500 text-black">
      <div className="pb-2">Welcome Component, {name}</div>
      <Parent />
      <Sibling />
    </div>
  );
}
