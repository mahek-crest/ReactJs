const MessageBox = ({ counter }) => {
  if (counter > 0) {
    return <p>value is greater zero</p>;
  } else if (counter < 0) {
    return <p>value is less zero</p>;
  } else {
    return <p>value is zero</p>;
  }
};

export default MessageBox;
