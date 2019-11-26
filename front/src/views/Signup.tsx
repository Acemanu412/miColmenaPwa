import {observer} from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup: React.FC = observer(() => {
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
});

export default Signup;
