// CreateContext   /context.ts
// Provider        /provider.tsx
// Reducer (maybe) / reducer.ts
// wrap children (useContext)

import type { Country } from "@/lib/types";
import React, { createContext, useEffect, useState } from "react";

export const CountryContext = createContext<{
  countries: Country[];
}>({
  countries: [],
});

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("/api/countries");
        if (!response.ok) {
          throw Error("WTF");
        }
        const result = await response.json();
        if (result) {
          setCountries(result);
        }
      } catch {
        console.error("something happened");
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
