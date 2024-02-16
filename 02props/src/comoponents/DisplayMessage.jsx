const DisplayMessage = ({ handleChnage, message }) => {
  return (
    <>
      <p>{`this is a child component of app ...here is the mesg form parent component ..... ${message} `}</p>
    </>
  );
};

export default DisplayMessage;
