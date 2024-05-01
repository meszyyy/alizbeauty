import React from "react";
import "./styles/styles.css";
import "./styles/wimpern.css";
import Tipps from "./Tipps";

const Wimpern = () => {
  return (
    <div>
      <div className="section lash-section" id="dienstleistungen">
        <div className="container">
          <h1 className="top-heading">Wimpernverlängerung</h1>
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">2D Technik.</h2>
              <h2 className="heading-subtext">Bist du natürliche Typ?</h2>
              <p className="lead">
                Die 2D Wimpernverlängerung ist das nächste Level von der
                klassischen 1:1 Wimpern-Technik. Während bei der Einzeltechnik
                nur ein Kunsthaar auf ein Naturhaar geklebt wird, werden bei 2D
                Wimpern die doppelte Anzahl in Form von Fächern appliziert.
              </p>
              <p>Neuset: ca. 2,5 Stunde</p>
            </div>
            <div
              id="carouselExampleIndicators2D"
              class="carousel slide col-md-5"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2D"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2D"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators2D"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/wimpern/2D_2.JPEG"
                    alt="2D Wimpernverlängerung"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/wimpern/2D_1.PNG"
                    alt="2D Wimpernverlängerung"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/wimpern/2D_4.JPEG"
                    alt="2D Wimpernverlängerung"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators2D"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators2D"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">3-4D Volumentechnik.</h2>
              <h2 className="heading-subtext">Ein bisschen mehr.</h2>
              <p className="lead">
                Die 3D oder 4D Volumentechnik kommt vor allem, für all jene
                Damen in Frage die sich gerne zeigen und gerne im Mittelpunkt
                stehen. Denn mit diesen Wimpern fällt man garantiert auf.
              </p>
              <p>Neuset: ca. 3 Stunde</p>
            </div>
            <div
              id="carouselExampleIndicators34D"
              class="carousel slide col-md-5"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators34D"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators34D"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators34D"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators34D"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/wimpern/3-4D_1.JPG"
                    alt="3-4D Wimpernverlängerung"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/wimpern/3-4D_2.JPEG"
                    alt="3-4D Wimpernverlängerung"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/wimpern/3-4D_3.JPG"
                    alt="3-4D Wimpernverlängerung"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/wimpern/3-4D_5.PNG"
                    alt="3-4D Wimpernverlängerung"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators34D"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators34D"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">5-6D Volumentechnik.</h2>
              <h2 className="heading-subtext">Für die Glamouröse.</h2>
              <p className="lead">
                Bei dieser Wimpern-Technik werden an jedem natürlichen
                Wimpernhaar gleich mehrere feine Kunstwimpern appliziert. Beim
                Wimpern verlängern werden genauer gesagt 5 oder 6 Wimpern an
                eine natürliche Wimpern angebracht.
              </p>
              <p>Neuset: ca. 3,5 Stunde</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image img-fluid mx-auto"
                src="images/wimpern/5-6D.PNG"
                alt="5/6D Wimpernverlängerung"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid price-section-lash">
        <div className="container price-table-lash py-3">
          <h1 className="mid-heading" style={{ marginBottom: "0px" }}>
            Preisliste
          </h1>
          <h1 className="mid-heading" style={{ marginTop: "5px" }}>
            (gültig ab 1.5.2024)
          </h1>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>2D Wimpern Neuset</td>
                <td className="text-end">100€</td>
              </tr>
              <tr>
                <td>Auffüllen:</td>
              </tr>
              <tr>
                <td>2 Wochen</td>
                <td className="text-end">50€</td>
              </tr>
              <tr>
                <td>3 Wochen</td>
                <td className="text-end">60€</td>
              </tr>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td colspan="100%"></td>
              </tr>
              <tr>
                <td>3-4D Wimpern Neuset</td>
                <td className="text-end">110€</td>
              </tr>
              <tr>
                <td>Auffüllen:</td>
              </tr>
              <tr>
                <td>2 Wochen</td>
                <td className="text-end">60€</td>
              </tr>
              <tr>
                <td>3 Wochen</td>
                <td className="text-end">75€</td>
              </tr>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td colspan="100%"></td>
              </tr>
              <tr>
                <td>5-6D Wimpern Neuset</td>
                <td className="text-end">125€</td>
              </tr>
              <tr>
                <td>Auffüllen:</td>
              </tr>
              <tr>
                <td>2 Wochen</td>
                <td className="text-end">70€</td>
              </tr>
              <tr>
                <td>3 Wochen</td>
                <td className="text-end">85€</td>
              </tr>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td colspan="100%"></td>
              </tr>
            </tbody>
          </table>
          <p>
            Neubehandlung wird verrechnet:
            <br />- bei mehr als 3 Wochen
            <br />- bei 15 Kunstwimpern oder weniger
            <br />- Behandlung nach einer anderen Lash Stylistin
          </p>
        </div>
      </div>
      <Tipps />
    </div>
  );
};

export default Wimpern;
