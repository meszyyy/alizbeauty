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
        {/* Bootstrap 5 starter form */}
        <form
          action="https://formsubmit.co/meszarostamas1989@gmail.com"
          method="POST"
          id="contactForm"
        >
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" defaultValue="false" />
          <input
            type="hidden"
            name="_next"
            defaultValue="https://aliz-react.herokuapp.com/redirect.html"
          />
          {/* Name input */}
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
          {/* Email address input */}
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
          {/* Phone address input */}
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
          {/* Message input */}
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
          {/* Form submit button */}
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
                  href="mailto:heilingaliz17@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope style={{ color: "#cb2027" }} />
                </a>
                <p>heilingaliz17@gmail.com</p>
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10881.100351636824!2d15.3983119!3d47.0152051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefff05a7af4400a8!2sAliz%20Beauty!5e0!3m2!1shu!2sat!4v1654237702918!5m2!1shu!2sat"
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
