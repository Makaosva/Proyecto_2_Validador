{
  /*import facebooktLogo from "../assets/img/001-facebook.png";
import linkedinLogo from "../assets/img/002-linkedin-logo.png";
import githubLogo from "../assets/img/003-github.png";*/
}

function SocialButton(props) {
  console.log(props);
  return (
    <div>
      <a href={props.url} target="_blank">
        <img src={props.icono} className="logo" alt={props.name} />
      </a>
    </div>
  );
}

export default SocialButton;
