import { CountryContext } from "@/contexts/CountryContext";
import type { Country } from "@/lib/types";
import { useContext, useMemo } from "react";
import { useParams } from "react-router";

export function CountryDetail() {
  const { alpha3Code } = useParams();
  const { countries } = useContext(CountryContext);

  const detail = useMemo<Country | undefined>(
    () => countries.find((country) => country.alpha3Code === alpha3Code),
    [alpha3Code, countries],
  );

  return (
    <div className="min-h-screen bg-background p-4">
      {detail ? (
        <div>
          <h1 className="text-2xl font-bold">{detail.name}</h1>
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
}
