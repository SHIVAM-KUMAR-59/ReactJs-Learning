import { useSelector } from "react-redux";

const DisplayCounter = () => {

  const counter = useSelector(store => store.counter)

  return (
    <>
      <p className="lead fs-4 mb-4">
        Counter current Value: {counter}
      </p>
    </>
  );
};

export default DisplayCounter;
