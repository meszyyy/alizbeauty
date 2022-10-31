import React from "react";
import "./styles/styles.css";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h6 className="text-uppercase font-weight-bold">
                Additional Information
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                interdum quam odio, quis placerat ante luctus eu. Sed aliquet
                dolor id sapien rutrum, id vulputate quam iaculis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                interdum quam odio, quis placerat ante luctus eu. Sed aliquet
                dolor id sapien rutrum, id vulputate quam iaculis.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h6 className="text-uppercase font-weight-bold">Kontakt</h6>
              <p>
                8054, Seiersberg, Kärntner Straße 510
                <br />
                info@alizbeauty.com
                <br />+ 43 681 202 52 649
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
