import { useContext } from "react";
import CountryCard from "./CountryCard";
import { CountryContext } from "@/contexts/CountryContext";

export default function CountryList() {
  const { countries } = useContext(CountryContext);

  return (
    <div className="w-full">
      {countries.length ? (
        <ul className="grid grid-cols-3 gap-6">
          {countries.map((country) => (
            <li key={country.alpha3Code} className="col-auto">
              <CountryCard data={country} />
            </li>
          ))}
        </ul>
      ) : (
        <div>No Data / Loading</div>
      )}
    </div>
  );
}
