import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { Country } from "@/lib/types";

export default function CountryCard({ data }: { data: Country }) {
  return (
    <Link to={`/country/${data.alpha3Code}`}>
      <Card>
        <img
          src={data.flags.png}
          alt={`Flag of ${data.name}`}
          className="aspect-video object-cover bg-gray-200"
        />
        <CardHeader>
          <CardTitle className="truncate">{data.name}</CardTitle>
        </CardHeader>
        <CardContent>
          A Country in {data.region} with population of {data.population}{" "}
          people.
        </CardContent>
      </Card>
    </Link>
  );
}
