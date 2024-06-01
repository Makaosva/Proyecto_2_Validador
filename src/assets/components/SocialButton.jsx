import facebooktLogo from "../img/001-facebook.png";
import linkedinLogo from "../img/002-linkedin-logo.png";
import githubLogo from "../img/003-github.png";

function SocialButton() {
  return (
    <div>
      <a href="https://www.facebook.com/" target="_blank">
        <img src={facebooktLogo} className="logo" alt="Facebook icon" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <img src={linkedinLogo} className="logo" alt="LinkdIn icon" />
      </a>
      <a href="https://github.com" target="_blank">
        <img src={githubLogo} className="logo" alt="Github icon" />
      </a>
    </div>
  );
}

export default SocialButton;
