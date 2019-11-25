import React from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useStores } from "../../hooks/useStore";
import { SignUpFormProperties } from "../../store";

const Signup: React.FC = () => {
  const store = useStores();
  console.log(store);
  return (
    <form>
      <input
        type="text"
        placeholder="Nombre de usuario"
        name="Nombre de usuario"
        onChange={e => {
          console.log("aqui", e.target.value);
          store.handleChange(SignUpFormProperties.email, e.target.value);
        }}
      />
      <Input
        type="email"
        placeholder="Correo electronico"
        name="Correo electronico"
      />

      <button
        onClick={e => {
          e.preventDefault();
          console.log(store);
        }}
      >
        Registrarte
      </button>

      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Ingresa aqui</Link>
      </p>
    </form>
  );
};

export default Signup;
