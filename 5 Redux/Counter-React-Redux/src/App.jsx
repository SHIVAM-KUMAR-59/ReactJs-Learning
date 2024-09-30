import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";

function App() {
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            <DisplayCounter />
            <Controls />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
