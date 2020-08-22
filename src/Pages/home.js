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
          <div className="container row">
            <div className="navbar-header col">
              <img src={L} alt=" " style={{ zIndex: "5" }} className=" " />
            </div>

            <div className="col right">
              <p style={{ color: "black" }}>Phone: 917-376-0513</p>
              <p style={{ color: "black" }}>Xtremeclean29@gmail.com</p>
            </div>
          </div>
        </div>
        {/*  */}

        <section id="home">
          <div className="overlay">
            {" "}
            <img
              src={clean}
              alt="logo"
              style={{ height: "100%", width: "100%" }}
            />
          </div>

          <div className="container">
            <div className="row">
              <div
                className="col   fadeInUp"
                data-wow-delay="0.3s"
                style={{ backgroundColor: "grey", opacity: ".9" }}
              >
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                  Xtreme Cleaning
                </h1>
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                  Let's Get To Cleaning
                </h1>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.9s"
                  style={{ color: "white" }}
                >
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
              className="col-md-12 col-sm-12 wow fadeInUp text-center"
              data-wow-delay="0.2s"
            >
              <div className="about-thumb ">
                <h1 style={{ color: "lightblue" }}>Background</h1>
                <p style={{ color: "black" }}>
                  Xtreme Cleaning is a woman-owned company, established in New
                  York since 2014. Xtreme can provide you with the utmost
                  professional service in the tri–state area. We are a company
                  focused in servicing our clients and matching them with the
                  best cleaning crews to excel in our service. We aim to fulfill
                  our customer needs in all janitorial services. We will ensure
                  you the best service and tailored to your company’s need.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col wow fadeInUp" data-wow-delay="0.3s">
                <div className="section-title text-center">
                  <h1 style={{ color: "lightblue" }}>
                    PRODUCTS AND SERVICES: Our company provides Xtreme cleaning
                  </h1>
                  <ul>
                    <li>Post Construction Cleaning / Office Cleaning</li>
                    <li>Move In/Move Out Cleaning</li>
                    <li>Carpet Care /Floor Strip/ Wax</li>
                    <li> Power Washing Cleaning</li>
                    <li>Windows In/Out / Restroom Cleaning</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <h1 style={{ color: "lightblue" }}>Info/Codes</h1>
                <ul>
                  <li>
                    Vendor Information: Small Business/ Woman Owned Business
                  </li>
                  <li>
                    Classification: Small Business NAICS codes: 561720 –
                    Janitorial Services 561790 - Other Services to Buildings &
                    Dwellings NIGP Code: 910-39 - Janitorial/Custodial Services
                    910-03 - Building Cleaning, Exterio
                  </li>
                </ul>
              </div>
              <div className="col">
                <h1 style={{ color: "lightblue" }}>Contact us!</h1>
                <ul>
                  Adress
                  <li>Address: 1969 Gildersleeve Avenue Bronx, NY 10473</li>
                </ul>
                <ul>
                  Contact info
                  <li>
                    Phone: 917-376-0513 Contact: Omaira Lugo Email:
                    Xtremeclean29@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
