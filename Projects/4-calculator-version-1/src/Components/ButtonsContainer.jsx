import styles from "./ButtonsContainer.module.css";
import Buttons from "./Buttons";
const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((names) => (
          <Buttons name = {names}/>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
