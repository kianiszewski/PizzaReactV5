import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const validarDatos = (e) => {
        e.preventDefault();

        if (!email.trim() || !contraseña.trim()) {
            alert('Favor ingresa los datos requeridos');
            return;
        }

        if (contraseña.length < 6) {
            alert('Bonk, la contraseña debe tener al menos 6 caracteres');
            return;
        }

        alert('Formulario enviado correctamente');
        setContraseña('');
        setEmail('');
    };

    return (
        <>
            <h1>Login</h1>
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
                <button type="submit" className="btn btn-dark">
                    Enviar
                </button>
            </form>

{/*             <h5>Datos ingresados</h5>
            {contraseña} - {email} */}
        </>
    );
};

export default Login;
