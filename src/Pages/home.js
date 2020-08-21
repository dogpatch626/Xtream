import React, { Component } from "react";
import "../App.css";
import L from "../media/clean.png";
import clean from "../media/clean2.png";
export default class homePage extends Component {
  render() {
    return (
      <div>
        {/* <div classNameName="nav row navsha">
          <div classNameName="col  ">
            <img src={L} alt="logo" />
          </div>
        </div>
        <div classNameName="row " style={{ width: "100%" }}>
          <div classNameName="col">
            
          </div>
          <div classNameName="col">
            <h2> About Us </h2>
            <div id="colorstrip" />
            <p>
              Xtreme Cleaning is a woman-owned company, established in New York
              since 2014. Xtreme can provide you with the utmost professional
              service in the tri–state area. We are a company focused in
              servicing our clients and matching them with the best cleaning
              crews to excel in our service. We aim to fulfill our customer
              needs in all janitorial services. We will ensure you the best
              service and tailored to your company’s need.
            </p>
            <div id="colorstrip" />
          </div>
        </div> */}
        <div
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <img
                src={L}
                alt=" "
                style={{ zIndex: "5" }}
                className=" wow fadeInUp"
              />
            </div>
          </div>
        </div>
        {/*  */}

        <section id="home">
          <div className="overlay"></div>

          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src={clean}
                  alt="logo"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="col   fadeInUp" data-wow-delay="0.3s">
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                  Xtreme Cleaning
                </h1>
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                  Let's Get To Cleaning
                </h1>
                <h2 className="wow fadeInUp" data-wow-delay="0.9s">
                  Xtreme Cleaning, the cleaning company for you
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <div className="container">
          <div className="row">
            <div
              className="col-md-9 col-sm-8 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="about-thumb">
                <h1>Background</h1>
                <p>
                  Quisque tempor bibendum dolor at volutpat. Suspendisse
                  venenatis quam sed libero euismod feugiat. In cursus nisi
                  vitae lectus facilisis mollis. Nullam scelerisque, quam nec
                  iaculis vulputate.
                </p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-4 wow fadeInUp about-img"
              data-wow-delay="0.6s"
            >
              <img
                src="images/about-img.jpg"
                className="img-responsive img-circle"
                alt="About"
              />
            </div>

            <div className="clearfix"></div>

            <div
              className="col-md-12 col-sm-12 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="section-title text-center">
                <h1>Snapshot Team</h1>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
