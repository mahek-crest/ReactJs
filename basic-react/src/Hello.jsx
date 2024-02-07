const Hello = () => {
  const myName = "Jonas";
  const num = 24;

  const fullName = () => {
    return "Jonas Smith";
  };

  return (
    <>
      <h3>Message number : {num} </h3>
      <p>this is the hello component . this is made by {myName}</p>
      <p>My full name is {fullName()} </p>
    </>
  );
};

export default Hello;
