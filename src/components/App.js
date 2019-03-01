import React from "react";
import Balloon from "./Balloon";
import Card from "./Card";
import Cards from "./Cards";
import Chips from "./Chips";
import Dropdown from "./Dropdown";

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
          <div className="col" style={{ marginTop: "30px" }}>
            <h3>Balloon</h3>
            <Balloon
              referral={
                <Card
                  title="Vivamus suscipit"
                  image={require(`../images/image6.jpg`)}
                >
                  Vivamus suscipit tortor eget felis porttitor volutpat. Quisque
                  velit nisi, pretium ut lacinia in, elementum id enim.
                </Card>
              }
            >
              Balloon text message
            </Balloon>
          </div>
          <div
            className="col"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <h3>Dropdown</h3>
            <Dropdown
              options={[
                { label: "one", value: 1 },
                { label: "two", value: 2 },
                { label: "three", value: 3 }
              ]}
              label={"label"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
