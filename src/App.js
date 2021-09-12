import "./App.scss";
import Header from "./components/Header";
import Features from "./components/Features";
import Banner from "./pages/Banner";
import Reviews from "./pages/Reviews";
import PriceBox from "./pages/PriceBox";
import Footer from "./components/Footer";

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
      <section className="fourth">
        <div className="app__body">
          <div className="price">
            <div className="price__description">
              <h2>One simple price plan</h2>
              <p>
                Start Growing your twitter by analyzing your follower's <br />
                pattern
              </p>
            </div>
            <PriceBox />
          </div>
        </div>
      </section>
      <section className="fifth">
        <div className="app__body">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
