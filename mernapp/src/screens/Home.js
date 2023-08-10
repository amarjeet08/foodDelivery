import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div
          ClassName="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="..." ClassName="card-img-top" alt="..." />
          <div ClassName="card-body">
            <h5 ClassName="card-title">Card title</h5>
            <p ClassName="card-text">This is some important text.</p>
            <div className="container w-100"></div>
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
