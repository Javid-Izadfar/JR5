import { useContext } from "react";
import { NameContext } from "~/stores/name/context";

export function Child() {
  const {
    state: { name },
  } = useContext(NameContext);
  return <div className="p-5 bg-amber-400">Child Component, {name}</div>;
}
