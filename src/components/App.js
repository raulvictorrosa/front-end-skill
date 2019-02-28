import React from "react";
import Card from "./Card";
import Cards from "./Cards";
import Chips from "./Chips";

const App = () => {
  return (
    <div className="base-page">
      <div className="container ">
        <div className="row ">
          <div className="col">
            <Chips />
          </div>
          <div className="col" style={{ marginTop: "30px" }}>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
