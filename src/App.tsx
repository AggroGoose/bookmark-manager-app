import Content from "./content/Content";
import Header from "./header/Header";
import Sidebar from "./nav/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-[296px_1fr] font-sans">
      <Sidebar />
      <main className="col-2 grid grid-rows-[78px_1fr] min-h-screen">
        <Header />
        <Content />
      </main>
    </div>
  );
}

export default App;
