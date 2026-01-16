import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <div className="text-center mb-5">
      <p className="text-muted text-uppercase fw-semibold letter-spacing">
        Current Value
      </p>
      <div className="display-counter-box">
        <h2 className="display-3 fw-bold text-white">{counterVal}</h2>
      </div>
    </div>
  );
};

export default DisplayCounter;
