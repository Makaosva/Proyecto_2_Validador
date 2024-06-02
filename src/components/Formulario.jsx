import React from "react"
import {useState} from 'react'

const Formulario = () => {

    //Estados del Formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmar, setConfirmar] = useState('');

    //Estado para los errores
    const [errores, setErrores] = useState({
        camposVacios: false,
        passNoCoincide: false
    });

     // Estado para la confirmación del envío
     const [enviado, setEnviado] = useState(false);

     // Restablecer el estado de enviado a false cuando se cambia algún campo
     const handleChange = (setter) => (e) => {
        setter(e.target.value);
        setEnviado(false); 
    };

    const validarDatos = (e) => {
        e.preventDefault();

        let erroresActuales = {
            camposVacios: false,
            passNoCoincide: false
        };

        //Validación;
        if (nombre === '' || email === '' || password === '' || confirmar === '')
        {
            erroresActuales.camposVacios = true;}

        if (password !== confirmar) {
            erroresActuales.passNoCoincide = true;}

        setErrores(erroresActuales);

        // Estado para validar y enviar el formulario
        if (!erroresActuales.camposVacios && !erroresActuales.passNoCoincide) {

        console.log('Formulario enviado');

        // Establecer el estado de enviado a true
        setEnviado(true);

        // Reiniciar el formulario
        setNombre('');
        setEmail('');
        setPassword('');
        setConfirmar('');
    }
    };  
    

    return (
        <>
        <form className="formulario" onSubmit={validarDatos}>
            <div className="form-group">
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    onChange= {handleChange(setNombre)}
                    value={nombre}
                    placeholder="Nombre"
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange= {handleChange(setEmail)}
                    value={email}
                    placeholder="TuEmail@email.com"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={handleChange(setPassword)}
                    value={password}
                    placeholder="Password"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="confirmar"
                    className="form-control"
                    onChange={handleChange(setConfirmar)}
                    value={confirmar}
                    placeholder="Confirma tu Password"
                />
            </div>
            <button type="submit" className="btn btn-primary">
            Enviar
            </button>

        {/* Mensajes de error y eviado */}
        {errores.camposVacios && <p>Completa todos los campos</p>}
        {errores.passNoCoincide && <p>Debes igualar tu password para continuar</p>}
        {enviado && <p>¡Información enviada con éxito!</p>}

        </form>
        </>
    )


}

export default Formulario
