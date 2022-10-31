import React from "react";
import "./styles/styles.css";
import "./styles/about.css";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="section about-section about-bg p-0" id="about" href="#about">
      <div className="about-logo">
        <img
          src="/images/logo.png"
          width={150}
          height={125}
          alt="Aliz Beauty Logo"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-around flex-row-reverse">
          <div className="col-lg-6 about-header">
            <h3>Aliz Meszaros</h3>
            <h4>Wimpern Stylist</h4>
            <div className="about-text">
              <p>
                2021 habe ich den Basiskurs für die Wimpernverlängerung und
                anschließend das Volumentraining absolviert. Seitdem arbeite ich
                als Wimpernstylistin. Für meine Arbeit sind Kreativität und
                Fachwissen sehr wichtig, damit ich meinen Kundinnen Wimpern
                zaubern kann, von denen sie schon immer geträumt haben und
                dadurch noch hübscher werden.
              </p>
            </div>
            <div className="about-text">
              <p>
                Außerdem ist es mir sehr wichtig, mit hochwertigen Materialien
                zu arbeiten. Deshalb habe ich mich für die Produkte von "Lash
                Style Academy" entschieden, mit denen ich seit Beginn an
                arbeite. Meine bestehenden Kundinnen sind mit mir und meiner
                Arbeit sehr zufrieden und kommen gerne wieder. Gib mir die
                Möglichkeit dich zu überzeugen und du sparst morgens Zeit bei
                deiner Schminkroutine. 
              </p>
              <p>Mit Liebe, eure Aliz </p>
            </div>
            <div className="about-zitate">
              <p>
                "Ein Mädchen sollte zwei Sachen sein: elegant und fabulös." -
                Coco Chanel
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="about-img">
              <img
                src="/images/aliz.png"
                width="80%"
                height="auto"
                alt="Aliz Meszaros"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
  ); 
};

export default About;
