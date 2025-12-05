import { useState } from "react";
import Content from "./content/Content";
import Header from "./header/Header";
import Sidebar from "./nav/Sidebar";

function App() {
  const [isLight, setIsLight] = useState(true);

  return (
    <div
      className={`grid grid-cols-[296px_1fr] font-sans${
        !isLight ? " dark" : ""
      }`}
    >
      <Sidebar />
      <main className="col-2 grid grid-rows-[78px_1fr] min-h-screen">
        <Header isLight={isLight} setIsLight={setIsLight} />
        <Content isLight={isLight} />
      </main>
    </div>
  );
}

export default App;
