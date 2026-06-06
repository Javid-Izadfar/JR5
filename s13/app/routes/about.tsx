import { Link } from "react-router";

export default function () {
  const projectName = "trip";
  return (
    <div>
      <div>About</div>
      <div>
        Let See{" "}
        <Link
          to={{
            pathname: "/freelance-projects",
            search: "?foo=bar",
          }}
        >
          Some Work
        </Link>{" "}
        of mine
      </div>
    </div>
  );
}
