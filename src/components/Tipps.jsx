import React from 'react';
import "./styles/styles.css";
import "./styles/tipps.css";
import { FaExclamation } from "react-icons/fa";
import { IconContext } from "react-icons";

const Tipps = () => {
    return (
        <div ><section className="section tipps-section" id="tipps" href="#tipps" >
        <h1 className="mid-heading">Pflegetipps</h1><IconContext.Provider value={{ size: "1.5em" }}>
        <ul>
          <li><FaExclamation />In den ersten 24 Stunden Wasser vermeiden!</li>
          <li><FaExclamation />Benutze keine ölhaltige Produkte!</li>
          <li><FaExclamation />Wimpernzange ist Tabu!</li>
          <li><FaExclamation />Schminke dich nicht mit Mascara!</li>
          <li><FaExclamation />Nicht an den Wimpern reiben, ziehen und zupfen!</li>
        </ul></IconContext.Provider>
      </section>
            
        </div>
    );
};

export default Tipps;