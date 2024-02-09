const Display = ({ username, password, submitted }) => {
  // console.log(submitted);
  return (
    <>
      <p>Username : {submitted ? username : ""}</p>
      <p>Password : {submitted ? password : ""}</p>
    </>
  );
};

export default Display;
