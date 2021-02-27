import React from "react";
import Header from "./Header";

function Portfolio() {
  return (
    <>
      <section className="container ml-3 mt-5 mr-3">
        <div className="row">
          <div className="col-md-9">
            <div className="jumbotron bg-white">
              <h1 className="display-4">About William</h1>

              <hr className="my-4" />

              <div className="row">
                <div className="col-lg-6 mt-4 mb-4">
                  <a href="https://spencerv86.github.io/booze-n-tunes/">
                    <img
                      src="./assets/images/6.png"
                      className="rounded"
                      alt="Potfolio Item 1"
                      style={{
                        objectFit: "cover",
                        width: "350px",
                        height: "350px",
                      }}
                    />
                  </a>
                  <h5 style={{ textAlign: "center" }}>Booze n' Tunes</h5>
                  <a href="https://github.com/spencerv86/booze-n-tunes">
                    <h5 style={{ textAlign: "center" }}>Github Repository</h5>
                  </a>
                </div>

                <div className="col-lg-6 mt-4 mb-4">
                  <a href="/">
                    <img
                      src="./assets/images/FoodFall.jpg"
                      className="rounded"
                      alt="Potfolio Item 1"
                      style={{objectFit: "cover" , width: "350px" , height: "350px" }}
                    />
                  </a>
                  <h5 style={{textAlign: "center"}}>Food Fall</h5>
                  <a href="https://github.com/tr8b5/Food-Fall">
                    <h5 style={{textAlign: "center"}}>Github Repository</h5>
                  </a>
                </div>

                <div className="col-lg-6 mt-4 mb-4">
                  <a href="https://www.atlantafirstrealty.com">
                    <img
                      src="./assets/images/Screen Shot 2020-11-21 at 7.52.37 PM.png"
                      className="rounded"
                      alt="Potfolio Item 2"
                      style={{objectFit: "cover" , width: "350px" , height: "350px" }}
                    />
                  </a>
                  <h5 style={{textAlign: "center"}} >Atlanta First Realty</h5>
                  <h5 style={{textAlign: "center"}} >Built In Wordpress</h5>
                </div>

                <div className="col-lg-6 mt-4 mb-4">
                  <a href="https://everythingvr.com">
                    <img
                      src="./assets/images/Screen Shot 2020-11-21 at 7.55.16 PM.png"
                      className="rounded"
                      alt="Potfolio Item 3"
                      style={{objectFit: "cover" ,  width: "350px" , height: "350px" }}
                    />
                  </a>
                  <h5 style={{textAlign: "center" }}>Atlanta First Realty</h5>
                  <h5 style={{textAlign: "center" }}>Built In Wordpress</h5>
                </div>

                <div className="col-lg-6 mt-4 mb-4">
                  <img
                    src="./assets/images/Screen Shot 2020-05-25 at 11.24.57 AM.png"
                    className="rounded"
                    alt="Potfolio Item 4"
                    style={{objectFit: "cover" , width: "350px" , height: "350px" }}
                  />
                </div>

                <div className="col-lg-6 mt-4 mb-4">
                  <a href="https://www.adinamorgan.com">
                    <img
                      src="./assets/images/Screen Shot 2020-12-06 at 3.08.18 PM.png"
                      className="rounded"
                      alt="Potfolio Item 5"
                      style={{objectFit: "cover" , width: "350px" , height: "350px" }}
                    />
                  </a>
                  <h5 style={{textAlign: "center" }} >Adina Morgan</h5>
                  <h5 style={{textAlign: "center" }} >Built In Shopify</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
