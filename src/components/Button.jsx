const Button = (props) => {
  const {
    className = '',
    type = 'button',
    isDisabled,
    children,
    onClick
  } = props;

  console.log(isDisabled);
  return (
    <button
      className={`button ${className}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
