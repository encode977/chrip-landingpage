import "./App.scss";
import Header from "./components/Header";
import Features from "./components/Features";
import Banner from "./pages/Banner";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <div className="app">
      <section className="first">
        <div className="app__body">
          <Header />
          <Banner />
        </div>
      </section>
      <section className="second">
        <div className="app__body">
          <h2>
            Features that help you <br /> Tweet smarter.
            <Features />
          </h2>
        </div>
      </section>
      <section className="third">
        <div className="app__body">
          <h2>What our customers say</h2>
          <Reviews />
        </div>
      </section>
    </div>
  );
}

export default App;
