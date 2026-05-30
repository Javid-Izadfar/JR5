import { useState } from "react";
import { nanoid } from "nanoid";

import List from "./components/List";
import type { Item } from "./components/List";

const TOPICS: Item[] = [
  {
    id: 1,
    name: "JavaScript",
    href: "http://js.org/",
  },
  {
    id: 2,
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    name: "React",
    href: "https://www.react.dev/",
  },
];

const App = () => {
  const [handPickedPeople, setHandPickedPeople] = useState<Item[]>([]);

  const togglePickedPerson = (item: Item) => {
    setHandPickedPeople([...handPickedPeople, item]);
  };

  const PEOPLE: Item[] = [
    {
      id: 1,
      name: "Masoud",
      action: (person) => {
        togglePickedPerson(person);
      },
    },
    {
      id: 2,
      name: "AmirAli",
      action: togglePickedPerson,
    },
    {
      id: 3,
      name: "MohammadHossein",
    },
    {
      id: 4,
      name: "Mahdieh",
    },
    {
      id: 5,
      name: "Ali",
    },
    {
      id: 6,
      name: "Iman",
    },
  ];

  return (
    <>
      <h1>Welcome to JustReact5</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim,
        reprehenderit iure asperiores unde expedita animi corporis dolore itaque
        accusamus assumenda, commodi voluptatibus necessitatibus officia?
        Labore, unde? Doloribus, repellat earum.
      </p>
      <List title="Hand picked people" items={handPickedPeople} />
      <List title="People in this class" items={PEOPLE} />
      <List title="Topics we'll cover" items={TOPICS} />
    </>
  );
};

export default App;
