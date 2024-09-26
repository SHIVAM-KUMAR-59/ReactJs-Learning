import styles from "./Display.module.css";
const Display = (props) => {
  return (
    <>
      <input
        type="text"
        className={styles.display}
        value={props.displayValue}
        readOnly
      />
    </>
  );
};

export default Display;
