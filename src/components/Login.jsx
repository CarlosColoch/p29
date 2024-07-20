import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const user={
        email:"practica",
        password: "29"
    };

    
    const onSubmit = (data) => {
        console.log(data);

        localStorage.setItem('user', JSON.stringify(data));

        let obje = JSON.parse(localStorage.getItem("user"));

        if(obje.email === user.email && obje.password === user.password) 
        {
           // alert(obje.email + user.email + " /." + obje.password + user.password);
            navigate('/');
        } else { 
            alert("Contraseña incorrecta.");
        };

    }

    return <form onSubmit={handleSubmit(onSubmit)}>
     
        <div className="mb-3">
            <label>Usuario.....: </label>
            <input type="text" className="form-control" {...register('email')} />
        </div>
        <div className="mb-3">
            <label>Password..: </label>
            <input type="password" className="form-control" {...register('password')} />
        </div>
        <input type="submit" value="Enviar" />
     </form>
}

/*
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user={
        email:"carlos@gmail.com",
        password: "coloch"
    };

    useEffect(() => {
        localStorage.removeItem('user');
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(user.email === email && user.password === password) {
                 alert(user.email + " / " + email + ":: " +user.password + " / " + password);
                console.log("Iniciaste sesión");
                localStorage.setItem("user", JSON.stringify(user.email)); 
//                navigate("/", { replace: true });
                navigate('miapp');

            } else {
                alert("Contraseña incorrecta.");
            }
    };


  return (
    <div>
        <form>
            <label>Email</label><input type="email" />
            <label>Passsword</label><input type="password" />
            <button>Login</button>
        </form>
    </div>
   )
}
*/
export default Login;   
