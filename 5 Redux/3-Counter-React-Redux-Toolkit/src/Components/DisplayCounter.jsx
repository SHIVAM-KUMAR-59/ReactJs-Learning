import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <>
      <p className="lead fs-4 mb-4">Counter current Value: {counterVal}</p>
    </>
  );
};

export default DisplayCounter;
