import React from "react";
import Editor from "./components/Editor";
import Heading from "./components/Heading";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <Heading />
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
