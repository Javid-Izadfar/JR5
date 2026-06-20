import type React from "react";
import { NameContext } from "./context";
import { useReducer } from "react";
import { reducer } from "./reducer";

export function NameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    name: "Jay",
  });
  return (
    <NameContext.Provider value={{ state, dispatch }}>
      {children}
    </NameContext.Provider>
  );
}
