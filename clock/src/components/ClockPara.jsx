import { useEffect } from "react";
import { useState } from "react";

const ClockPara = () => {
  const [date, setDate] = useState(new Date());
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setDate(new Date());
    // }, 1000);
    setDate(new Date());
  }, [update]);

  const handleuPDTAE = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <p>
        The current time is {date.toLocaleDateString()} -
        {date.toLocaleTimeString()}
      </p>
      <button onClick={handleuPDTAE}>Undate</button>
    </div>
  );
};

export default ClockPara;
