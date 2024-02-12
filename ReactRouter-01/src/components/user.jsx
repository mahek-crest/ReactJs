import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return (
    <>
      <h2 className="text-center  m-20">user : {userid}</h2>
    </>
  );
};

export default User;
