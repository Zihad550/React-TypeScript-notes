import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div>
      {/* <List
        items={["Batman", "SuperMan", "SpiderMan"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[2, 123, 162, 1862, 146]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            id: 1,
            first: "jehad",
            last: "Hossain",
          },
          {
            id: 2,
            first: "Rabbi",
            last: "Hossain",
          },
          {
            id: 3,
            first: "Muzahid",
            last: "Hossain",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
