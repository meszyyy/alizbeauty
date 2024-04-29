import React from "react";
import "./styles/styles.css";
import "./styles/kontakt.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <div className="section kontakt-section" id="kontakt" href="#kontakt">
      <h1>Kontakt / Termin vereinbaren</h1>
      <div className="container py-4">
        <form
          action="https://public.herotofu.com/v1/954ec680-86af-11ed-b38f-a1ed22f366b1"
          method="POST"
          id="contactForm"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email Adresse
            </label>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Email Adresse"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">
              Telefon
            </label>
            <input
              className="form-control"
              name="phone"
              type="text"
              placeholder="Telefon"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Nachricht
            </label>
            <textarea
              className="form-control"
              name="message"
              type="text"
              placeholder="Nachricht"
              style={{ height: "10rem" }}
              required
              defaultValue={""}
            />
          </div>
          <div className="d-grid">
            <button
              className="btn btn-lg"
              type="submit"
              data-toggle="modal"
              href="#exampleModalCenter"
            >
              Nachricht senden
            </button>
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            ></div>
          </div>
        </form>
      </div>

      <div className="container" id="icon-grid">
        <div className="row">
          <IconContext.Provider value={{ size: "1.5em" }}>
            <div className="col-lg-3 justify-content-center">
              <div className="media-icons">
                <a
                  href="https://facebook.com/alizbeautygraz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF style={{ color: "#3b5998" }} />
                </a>
                <p>@alizbeautygraz</p>
              </div>
            </div>
            <div className="col-lg-3 justify-content-center">
              <div className="media-icons">
                <a
                  href="https://instagram.com/alizbeauty_graz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram style={{ color: "#ac2bac" }} />
                </a>
                <p>alizbeauty_graz</p>
              </div>
            </div>
            <div className="col-lg-3 justify-content-center">
              <div className="media-icons">
                <a
                  href="mailto:info@alizbeauty.at"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope style={{ color: "#cb2027" }} />
                </a>
                <p>info@alizbeauty.at</p>
              </div>
            </div>
            <div className="col-lg-3 justify-content-center">
              <div className="media-icons">
                <a
                  href="tel:004368120252649"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMobileAlt style={{ color: "black" }} />
                </a>
                <p>+43 681 20252649</p>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div className="map2 embed-responsive embed-responsive-21by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.525122501087!2d15.456995077422365!3d47.06916502493408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e4a62af74423d%3A0xaea69d0478e416fa!2sSchillerpl.%2013%2C%208010%20Graz!5e0!3m2!1shu!2sat!4v1697883912484!5m2!1shu!2sat"          
          title="map"
          width='800px"'
          height="300px"
          style={{ border: "1px solid #666666" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
