const Button = () => {
  let num = Math.trunc(Math.random() * 100);

  return (
    <>
      <p style={{ "background-color": "#34fe34" }}>Random num: {num}</p>
    </>
  );
};

export default Button;
