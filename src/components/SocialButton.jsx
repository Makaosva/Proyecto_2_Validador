const SocialButton = (props) => {
  return (
    <div>
      <a href={props.url} target="_blank">
        <img src={props.icono} className="logo" alt={props.name} />
      </a>
    </div>
  );
};

export default SocialButton;
