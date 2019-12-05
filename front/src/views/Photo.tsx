import axios from "axios";
import React from "react";

export const Photo: React.FC = () => {

    let photo;

    function handleChange(e) {
        e.preventDefault();
        photo = e.target.files[0];
    }

    function postPhoto(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo", photo);
        const config = {
            headers: { "content-type": "multipart/form-data" }
           };
        axios.post(`http://${process.env.REACT_APP_IP}:2222/api/colmena/photo`, formData, config);
    }

    return (
    <div>
        <h1>Hola upload a photo bitch</h1>
        <input type="file" accept="image/*" id="file-input" onChange={handleChange} />
        <button onClick={postPhoto}>Subir Photo</button>
        <input type="file" accept="image/*" id="file-input" capture onChange={handleChange} />
        <button onClick={postPhoto}>Subir Photo</button>
    </div>
  );
};
