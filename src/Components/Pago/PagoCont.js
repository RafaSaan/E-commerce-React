import React, { useState } from "react";
import Confirm from "./Confirm";
import "./PagoCont.css";
import PagoForm from "./PagoForm";
import PagoRew from "./PagoRew";
const steps = ["form", "review", ""];

const PagoCont = ({ items }) => {
  const [step, setStep] = useState(0);
  const handleNext = () => {
    // e.preventDefault();
    setStep(1);
  };
  const handleConfirm = () => {
    setStep(2);
  };
  if (step === 2) {
    return <Confirm />;
  }
  console.log(steps.length);
  return (
    <div className="pago__container">
      {step === 0 ? (
        <PagoForm next={handleNext} />
      ) : (
        <PagoRew items={items} confirm={handleConfirm} />
      )}
    </div>
  );
};

export default PagoCont;
