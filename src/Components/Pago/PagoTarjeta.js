import React, { useState } from "react";
import "./PagoTarjeta.css";

const PagoTarjeta = ({ confirm }) => {
  const [form, setForm] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="pago__tarjeta">
      <p className="pago__tarjeta__title">Metodo de Pago</p>
      <div className="input__pago__container">
        <input
          type="text"
          className="input__tarjeta"
          name="tarjeta"
          value={form.name}
          onChange={handleChange}
          placeholder="Numero de Tarjeta"
          autoComplete="off"
          required
          pattern="^[0-9]"
        />
        <input
          type="date"
          className="input__date"
          name="fecha"
          value={form.name}
          onChange={handleChange}
          autoComplete="off"
          required
          min="2021-01-01"
          max="2028-12-31"
        />

        <input
          type="text"
          className="input__cvv"
          name="CVV"
          value={form.name}
          onChange={handleChange}
          placeholder="CVV"
          autoComplete="off"
          required
          pattern="^[0-9]"
        />
      </div>
      <button className="cta" onClick={() => confirm()}>
        Pagar
      </button>
    </div>
  );
};
export default PagoTarjeta;
