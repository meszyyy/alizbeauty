import React from "react";
import "./styles/styles.css";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <p>
                Aliz Meszaros
                <br/>
                Kärntner Straße 510, 8054 Seiersberg
                <br />
                info@alizbeauty.at
                <br />+ 43 681 202 52 649
                <br/>
                <a href="https://firmen.wko.at/aliz-m%C3%A9sz%C3%A1ros/steiermark/?firmaid=4f02febb-888e-476d-8451-b8dccde02b6a" target="_blank" rel="noopener noreferrer">Link WKO</a>
                <br/>
                <a href="/datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutz</a>
                <br/>
                <a href="/hausordnung.html" target="_blank" rel="noopener noreferrer">Hausordnung</a>
              </p>
            </div>
          </div>
          <p style={{ textAlign: "center" }}> Copyright © Aliz Beauty</p>
          <p style={{ textAlign: "center" }}>All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
