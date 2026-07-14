import { useState } from "react";
import List from "./components/list";

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide" : "Show"} List
      </button>
      {showList && <List />}
    </div>
  );
}

export default App;
