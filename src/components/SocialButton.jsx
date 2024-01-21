import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialButton({ githubIcon, metaIcon, linkedinIcon }) {
  return (
    <>
      <div className="visualicono">
        {metaIcon && <FontAwesomeIcon icon={faFacebook} size="3x" />}{" "}
      </div>
      <div className="visualicono">
        {" "}
        {githubIcon && <FontAwesomeIcon icon={faGithub} size="3x" />}{" "}
      </div>
      <div className="visualicono">
        {" "}
        {linkedinIcon && <FontAwesomeIcon icon={faLinkedinIn} size="3x" />}{" "}
      </div>
    </>
  );
}

export default SocialButton;
