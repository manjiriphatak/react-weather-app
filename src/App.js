import "./App.css";

import Search from "./Search";
import Icon from "./Icon";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="row">
          <div className="col-sm-2 col-md-12 col-lg-4">
            <Icon />
          </div>

          <div className="col-sm-4 col-md-12 col-lg-8">
            <h1 className="card-title heading">The Weather Project</h1>
            <Search defaultCity="Toronto" />
          </div>
        </div>
        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
