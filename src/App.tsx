import React from "react";
import "./App.css";
import Text from "./components/Text";

function App() {
  return (
    <div>
      <Text as="h2" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text htmlFor="someId" as="label" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
