import "./App.scss";
import Header from "./components/Header";
import Banner from "./pages/Banner";

function App() {
  return (
    <div className="app">
      <section className="top">
        <div className="app__body">
          <Header />
          <Banner />
        </div>
      </section>
    </div>
  );
}

export default App;
