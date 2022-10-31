import React from "react";
import "./styles/styles.css";
import "./styles/dienstleistungen.css";
import Tipps from "./Tipps";

const Wimpern = () => {
  return (
    <div
      className="section dienstleistungen-section"
      id="dienstleistungen"
    >
      <div className="container">
        <h1 className="dl-heading">Wimpern</h1>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">1:1 Technik.</h2>
            <h2 className="text-muted">Bist du natürliche Typ?</h2>
            <p className="lead">
              Bei der klassischen 1:1-Technik wird für Ihre professionell
              durchgeführte Wimpernverlängerung immer je eine künstliche Wimper
              auf je eine eigene Naturwimper aufgesetzt.
            </p>
            <p>Neuset: ca. 2 Stunde</p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src="/images/wimpern/1D.png"
              alt="1D"
            />
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">1:2 Technik.</h2>
            <h2 className="text-muted">Ein bisschen mehr.</h2>
            <p className="lead">
              Die 2D Wimpernverlängerung ist das nächste Level von der
              klassischen 1:1 Wimpern-Technik. Während bei der Einzeltechnik nur
              ein Kunsthaar auf ein Naturhaar geklebt wird, werden bei 2D
              Wimpern die doppelte Anzahl in Form von Fächern appliziert.
            </p>
            <p>Neuset: ca. 2,5 Stunde</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              src="/images/wimpern/2D.png"
              alt="2D"
            />
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">3-4D Volumentechnik.</h2>
            <h2 className="text-muted">Für die Glamouröse.</h2>
            <p className="lead">
              Die 3D oder 4D Volumentechnik kommt vor allem, für all jene Damen
              in Frage die sich gerne zeigen und gerne im Mittelpunkt stehen.
              Denn mit diesen Wimpern fällt man garantiert auf.
            </p>
            <p>Neuset: ca. 3,5 Stunde</p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src="/images/wimpern/3-4D.jpg"
              alt="3/4D"
            />
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">5-6D Volumentechnik.</h2>
            <h2 className="text-muted">Für die Glamouröse.</h2>
            <p className="lead">
              Bei dieser Wimpern-Technik werden an jedem natürlichen Wimpernhaar
              gleich mehrere feine Kunstwimpern appliziert. Beim Wimpern
              verlängern werdern genauer gesagt sechs Wimpern an eine natürliche
              Wimpern angebracht.
            </p>
            <p>Neuset: ca. 3,5 Stunde</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              src="/images/wimpern/5-6D.jpg"
              alt="5/6D"
            />
          </div>
        </div>
      </div>
      <Tipps/>
    </div>
  );
};

export default Wimpern;
