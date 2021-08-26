import React, { useState } from "react";
import PagoBtns from "./PagoBtns";
import "./PagoForm.css";

const PagoForm = ({ next }) => {
  const [form, setForm] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <form action="" className="pago__form">
        <label htmlFor="">Nombre*</label>
        <input
          type="text"
          className="pago__input"
          name="nombre"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
          autoComplete="off"
          required
        />

        <label htmlFor="">Calle y No°*</label>
        <input
          type="text"
          className="pago__input"
          name="calle"
          value={form.name}
          onChange={handleChange}
          placeholder="Calle y No°"
          autoComplete="off"
          required
        />

        <label htmlFor="">Colonia*</label>
        <input
          type="text"
          className="pago__input"
          name="colonia"
          value={form.name}
          onChange={handleChange}
          placeholder="Colonia"
          autoComplete="off"
          required
        />

        <label htmlFor="">Estado*</label>
        <input
          type="text"
          className="pago__input"
          name="estado"
          value={form.name}
          onChange={handleChange}
          placeholder="Estado"
          autoComplete="off"
          required
        />

        <label htmlFor="">Codigo Postal*</label>
        <input
          type="text"
          className="pago__input"
          name="codigoP"
          value={form.name}
          onChange={handleChange}
          placeholder="Codigo Postal"
          autoComplete="off"
          required
        />
      </form>
      <PagoBtns next={next} />
    </div>
  );
};

export default PagoForm;
