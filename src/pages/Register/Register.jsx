import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarcontraseña, setConfirmarContraseña] = useState('');

    const validarDatos = (e) => {
        e.preventDefault();

        if (!email.trim() || !contraseña.trim() || !confirmarcontraseña.trim()) {
            alert('Favor ingresa los datos requeridos');
            return;
        }

        if (contraseña.length < 6) {
            alert('Bonk, la contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (contraseña !== confirmarcontraseña) {
            alert('Bonk, las contraseñas no coinciden');
            return;
        }

        alert('Formulario enviado correctamente');
        setContraseña('');
        setConfirmarContraseña('');
        setEmail('');
    };

    return (
        <>
            <h1>Registro</h1>
            <form className="formulario" onSubmit={validarDatos}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="contraseña"
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        name="confirmarcontraseña"
                        className="form-control"
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        value={confirmarcontraseña}
                    />
                </div>
                <button type="submit" className="btn btn-dark">
                    Enviar
                </button>
            </form>
            <hr />
            <h5>Datos ingresados</h5>
            {contraseña} - {confirmarcontraseña} - {email}
        </>
    );
};

export default Register;
