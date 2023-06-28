import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="copyright-container">
        <p>
          All Right Reserved{" "}
          <FontAwesomeIcon icon={faCopyright} id="copright" /> The Yucca Eatery
        </p>
      </div>
      <div className="socials-container">
        <div className="socials-text">
          <p className="footer-text">
            57754 Twentynine Palms Highway Yucca Valley, CA 92284 USA
          </p>
          <p className="footer-text">(760) 853-0222</p>
        </div>
        <div className="socials">
          <p className="footer-text">Check us out!</p>

          <FontAwesomeIcon icon={faYelp} className="font-icon" />
          <FontAwesomeIcon icon={faInstagram} className="font-icon" />
        </div>
      </div>
    </div>
  );
}
