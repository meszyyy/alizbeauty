import React from "react";
import "./styles/nagel.css";
import "./styles/styles.css";

const Nagel = () => {
  return (
    <div>
      <div className="container">
        <div className="home">
          <h1 className="dl-heading">Nägel</h1>
          <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{ backgroundImage: 'url("images/nagel/nagel1.JPG")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel2.jpg")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel3.jpg")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel4.jpg")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel5.jpg")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel6.jpg")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel7.jpg")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel8.PNG")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel9.PNG")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel10.jpg")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel11.jpg")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel12.PNG")' }}
              ></div>
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url("images/nagel/nagel13.jpg")' }}
              ></div>
            </div>
            <div className="carousel-controls">
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={0}
                  className="active"
                  style={{ backgroundImage: 'url("images/nagel/nagel1.JPG")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={1}
                  style={{ backgroundImage: 'url("images/nagel/nagel2.jpg")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={2}
                  style={{ backgroundImage: 'url("images/nagel/nagel3.jpg")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={3}
                  style={{ backgroundImage: 'url("images/nagel/nagel4.jpg")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={4}
                  style={{ backgroundImage: 'url("images/nagel/nagel5.jpg")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={5}
                  style={{ backgroundImage: 'url("images/nagel/nagel6.jpg")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={6}
                  style={{ backgroundImage: 'url("images/nagel/nagel7.jpg")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={7}
                  style={{ backgroundImage: 'url("images/nagel/nagel8.PNG")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={8}
                  style={{ backgroundImage: 'url("images/nagel/nagel9.PNG")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={9}
                  style={{ backgroundImage: 'url("images/nagel/nagel10.jpg")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={10}
                  style={{ backgroundImage: 'url("images/nagel/nagel11.jpg")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={11}
                  style={{ backgroundImage: 'url("images/nagel/nagel12.PNG")' }}
                />
                <li
                  data-bs-target="#carousel"
                  data-bs-slide-to={12}
                  style={{ backgroundImage: 'url("images/nagel/nagel13.jpg")' }}
                />
              </ol>
              <a
                className="carousel-control-prev"
                href="#carousel"
                role="button"
                data-bs-slide="prev"
              >
                <img src="images/left-arrow.svg" alt="Prev" />
              </a>
              <a
                className="carousel-control-next"
                href="#carousel"
                role="button"
                data-bs-slide="next"
              >
                <img src="images/right-arrow.svg" alt="Next" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid price-section">
        <div className="container price-table py-3">
          <h1 className="dl-heading">Preisliste</h1>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>Maniküre für Damen und Herren</td>
                <td>25€</td>
              </tr>
              <tr>
                <td>UV-Gellack</td>
                <td>30€</td>
              </tr>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td colspan="100%"></td>
              </tr>
              <tr>
                <td className="tableHeader" colSpan="3">
                  Naturnägelverstärkung
                </td>
              </tr>
              <tr>
                <td>S</td>
                <td>35€</td>
                <td>30€</td>
              </tr>
              <tr>
                <td>M</td>
                <td>40€</td>
                <td>35€</td>
              </tr>
              <tr>
                <td>L</td>
                <td>45€</td>
                <td>40€</td>
              </tr>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td colspan="100%"></td>
              </tr>
              <tr>
                <td className="tableHeader" colSpan="3">
                  Nagelverlängerung
                </td>
              </tr>
              <tr>
                <td>S</td>
                <td>45€</td>
                <td>40€</td>
              </tr>
              <tr>
                <td>M</td>
                <td>50€</td>
                <td>45€</td>
              </tr>
              <tr>
                <td>L</td>
                <td>55€</td>
                <td>50€</td>
              </tr>
              <tr style={{ borderBottom: "1px solid white" }}>
                <td colspan="100%"></td>
              </tr>
              <tr>
                <td className="tableHeader" colSpan="3">
                  Design und Extras: (inkl. 2 Nägel)
                </td>
              </tr>
              <tr>
                <td>Strass-Stein pro Nagel</td>
                <td>0.20€</td>
              </tr>
              <tr>
                <td>Design pro Nagel</td>
                <td>2€</td>
              </tr>
              <tr>
                <td>Kunstnägel entfernen</td>
                <td>20€</td>
              </tr>
              <tr>
                <td>Nagelreparatur</td>
                <td>5€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Nagel;
