// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/mahekkg")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // });

  const data = useLoaderData();

  return (
    <div className="text-center m-20 text-2xl">
      Github followers : {data.followers}
    </div>
  );
};

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/mahekkg");
  return response.json();
};
