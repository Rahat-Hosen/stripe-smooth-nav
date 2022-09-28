import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Aside } from "./Aside";
import "./styles.css";

// "text-indigo-600" : "text-gray-700"
function App() {
  const [selected, setSelected] = React.useState(1);
  return (
    <div className="antialiased bg-gray-200 min-h-screen flex flex-col items-center">
      <div
        className="flex flex-end mx-auto my-4 flex-auto w-full"
        style={{ maxWidth: "1600px" }}
      >
        <Aside
          className="mx-4 sticky top-0"
          setSelected={setSelected}
          selected={selected}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </Router>,
  rootElement
);
