import { useParams, useSearchParams } from "react-router";

export default function Other() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const author = searchParams.get("author");
  return (
    <div>
      <div>Other Projects</div>
      <div>
        Project Name: {params.projectName} | {author}
      </div>
    </div>
  );
}
