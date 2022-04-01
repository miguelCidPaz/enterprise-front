
import React, { useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../ProviderLogin';
import { useNavigate } from 'react-router-dom';
import md5 from 'md5';
import axios from "axios";

/**
 * Component for the registration of new users
 * @params theme
 * @returns component react
 */
export default function FormRegister(props) {
    // login or new user discriminator
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { session, connectSession } = useContext(UserContext);
    const navigate = useNavigate();
    const password = useRef({}); // to compare and confirm the password
    password.current = watch("password", "");
    let userData = { username: '', password: '', email: '' };
    const onSubmit = async (data) => {
        userData.username = data.username;
        userData.password = md5(data.password);
        userData.email = data.email

        await axios({
            method: 'post',
            url: 'https://enterprisecompany-server.herokuapp.com/v1/users/create',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                username: userData.username,
                email: userData.email,
                userpass: userData.password
            }
        }).then((res) => {
            if (res.status === 201) {
                if (connectSession(true, res.data.iduser, res.data.userName, res.data.userEmail)) {
                    navigate("/Profile");
                }
            } else {
                connectSession(false, undefined, undefined, undefined)
            }
        })
    };

    // post para ingresar el nuevo usario;

    return (<div className='form--main'>
        <form className='form--login' onSubmit={handleSubmit(onSubmit)} >
            {/* User Name */}
            <input spellCheck="false" className='form--input' type="text" placeholder="Username" {
                ...register("username",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        maxLength: { value: 80, message: 'Tamaño maximo 80' }
                    })} />
            {errors.username && <div className='login--message-errors'><p >{errors.username.message}</p></div>}
            {/* Email */}
            <input spellCheck="false" className='form--input' type="text" placeholder="Email@gmail.com" {
                ...register("email",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        pattern: { value: /^\S+@\S+$/i, message: 'Formato no correcto' }
                    })} />
            {errors.email && <div className='login--message-errors'><p >{errors.email.message}</p></div>}
            {/* Password */}
            <input spellCheck="false" className='form--input' type="password" placeholder="Password" {
                ...register("password",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        minleg: { value: 6, message: 'La contraseña tiene que tener al menos 6 caracteres' },
                        maxLength: { value: 100, message: 'Tamaño maximo 80' }
                    })} />
            {errors.password && <div className='login--message-errors'><p >{errors.password.message}</p></div>}
            {/* Password Repeat*/}

            <input spellCheck="false" className='form--input' type="password" placeholder="Password_Repeat" {
                ...register("passwordRepeat",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        minleg: { value: 6, message: 'La contraseña tiene que tener al menos 6 caracteres' },
                        validate: value =>
                            value === password.current || "las contraseñas no coinciden"
                    })} />
            {errors.passwordRepeat && <div className='login--message-errors'><p >{errors.passwordRepeat.message}</p></div>}

            <input type="submit" className='login--button' />
        </form>
        <button className='login--button login--navigation' onClick={() => props.setView(true)}>Volver a Login</button>
    </div>
    );
}