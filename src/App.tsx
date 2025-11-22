import { useState } from "react";
import data from "./data.json";
import Sidebar from "./nav/Sidebar";

function App() {
  const [bookmarks, setBookmarks] = useState(data.bookmarks);

  return (
    <div className="grid grid-cols-[296px_1fr] font-sans">
      <Sidebar />
      <main className="col-2">
        <h1>Vite + React</h1>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  );
}

export default App;
