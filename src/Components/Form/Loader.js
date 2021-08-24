import React from "react";
import tailSpin from "../../Media/tail-spin.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img src={tailSpin} alt="loader" className="loader__img" />
    </div>
  );
};

export default Loader;
