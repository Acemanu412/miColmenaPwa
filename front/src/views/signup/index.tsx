import React from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useStores } from "../../hooks/useStore";
import { SignUpFormProperties } from "../../store";

import Button from "../../components/Button";

const Signup: React.FC = () => {
  // const store = useStores();
  // console.log(store);
  return (
    <form>
      {/* <Input
        type="text"
        placeholder="Nombre de usuario"
        name="Nombre de usuario"
        // onChange={e => {
        //   console.log("aqui", e.target.value);
        //   store.handleChange(SignUpFormProperties.email, e.target.value);
        // }}
      /> */}

      <button
      // onClick={e => {
      //   e.preventDefault();
      //   console.log(store);
      // }}
      >
        Registrarte
      </button>

      <div>
        <span>¿Ya tienes una cuenta?</span>
        <Link to="/">Ingresa aqui</Link>
      </div>
    </form>
  );
};

export default Signup;
