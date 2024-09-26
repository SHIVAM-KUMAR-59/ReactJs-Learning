import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "AC",
    "%",
    "/",
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    ".",
    "00",
    "0",
    "C",
    "=",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((names) => (
          <button
            className={styles.buttons}
            onClick={() => onButtonClick(names)}
          >
            {names}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
