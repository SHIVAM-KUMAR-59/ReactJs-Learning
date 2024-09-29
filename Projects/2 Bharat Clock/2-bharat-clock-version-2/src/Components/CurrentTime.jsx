import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p className="fs-5">
        This is the current time:{" "}
        <span className="fst-italic">
          {" "}
          {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </span>
      </p>
    </>
  );
};

export default CurrentTime;
