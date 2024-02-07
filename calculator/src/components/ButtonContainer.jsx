import styles from "../App.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "+",
    "-",
    "*",
    "/",
    "=",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((btnname, index) => (
        <button
          onClick={() => onButtonClick(btnname)}
          key={index}
          className={styles.btn}
        >
          {btnname}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
