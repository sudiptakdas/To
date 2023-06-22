import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Name from "./Name";
import ToDo from "./ToDo";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="name" element={<Name />} />
      <Route path="todo" element={<ToDo />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
