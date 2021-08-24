import { useForm } from "../../hooks/useForm";
import "./Formulario.css";
import Loader from "./Loader";

const Formulario = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };
  const validationsForm = form => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
      errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    }

    if (!form.message.trim()) {
      errors.message = "El campo 'Mensaje' es requerido";
    } else if (!regexComments.test(form.message.trim())) {
      errors.message =
        "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }

    return errors;
  };
  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
    fontSize: "1.2rem",
  };
  let stylesScc = {
    fontWeight: "bold",
    color: "#198754",
    fontSize: "1.5rem",
  };
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre*</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Nombre"
        autoComplete="off"
        required
      />
      {errors.name && <p style={styles}>{errors.name}</p>}
      <label htmlFor="email">Email*</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Email"
        autoComplete="off"
        required
      />
      {errors.email && <p style={styles}>{errors.email}</p>}
      <label htmlFor="message">Mensaje*</label>
      <input
        type="text"
        name="message"
        value={form.message}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Mensaje"
        autoComplete="off"
        required
      />
      {errors.message && <p style={styles}>{errors.message}</p>}
      {loading && <Loader />}
      {response && <p style={stylesScc}> Los datos han sido enviados</p>}
      <button className="cta btn-submit">Enviar</button>
    </form>
  );
};

export default Formulario;
