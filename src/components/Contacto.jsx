import { useState } from "react";

const Contacto = () => {

    const [value, setValue] = useState({
        nombre: "",
        email: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviado", {value});
    }

    const handleNombre = (event) => {
        setNombre(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleValue = (event) => {
        console.log(event.target.value);
        setValue({...value, 
            [event.target.name]: event.target.value
        })
    }
  return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="main-title">Contacto</h2>
            <input type="text" placeholder="Ingrese Nombre" value={value.nombre} onChange={handleValue} name="nombre"/>
            <input type="email" placeholder="Ingrese Email" value={value.email} onChange={handleValue} name="email"/>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Contacto