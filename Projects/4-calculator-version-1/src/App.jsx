import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  return (
    <>
      <center className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </center>
    </>
  );
}

export default App;
