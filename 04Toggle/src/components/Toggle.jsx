import { PropTypes } from "prop-types";

const Toggle = ({ onBtnClick, value, number }) => {
  return (
    <>
      <button onClick={onBtnClick}>State</button>
      <p>{value ? "on" : "off"}</p>
      <p>{number}</p>
    </>
  );
};

Toggle.propTypes = {
  value: PropTypes.bool,
};

export default Toggle;
