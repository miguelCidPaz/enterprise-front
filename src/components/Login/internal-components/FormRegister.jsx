
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
    let userData = { username: '',name:'', avatar: '', credit:0, password: '', email: '' };
    const onSubmit = async (data) => {
        userData.username = data.username;
        userData.avatar = data.avatar;
        userData.name = data.name;
        userData.credit = data.credit;
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
                userpass: userData.password,
                name_description: userData.name,
                avatar: userData.avatar,
                founds: userData.credit
            }
        }).then((res) => {
            if (res.status === 201) {
                if (connectSession(true, res.data.iduser, res.data.userName, res.data.userEmail, res.data.founds)) {
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
            <input spellCheck="false" className='form--input' type="text" placeholder="Nombre de usuario" {
                ...register("username",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        maxLength: { value: 20, message: 'Tamaño maximo 20' }
                    })} />
                    {errors.username && <div className='login--message-errors'><p>{errors.username.message}</p></div>}
            <input spellCheck="false" className='form--input' type="text" placeholder="Nombre" {
                ...register("name",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        maxLength: { value: 40, message: 'Tamaño maximo 40' }
                    })} />
                    {errors.name && <div className='login--message-errors'><p>{errors.name.message}</p></div>}
            <input spellCheck="false" className='form--input' type="text" placeholder="Avatar" {
                ...register("avatar",
                    {
                        maxLength: { value: 80, message: 'Tamaño maximo 80' }
                    })} />
                    {errors.avatar && <div className='login--message-errors'><p>{errors.avatar.message}</p></div>}
            <input spellCheck="false" className='form--input' type="number" placeholder="Crédito" {
                ...register("credit",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        min: {value: 1, message: 'Tienes que introducir al menos 1€'},
                        max: { value: 999999999, message: 'Cantidad máxima 999999999' }
                    })} />
            {errors.credit && <div className='login--message-errors'><p >{errors.credit.message}</p></div>}
            {/* Email */}
            <input spellCheck="false" className='form--input' type="text" placeholder="Email" {
                ...register("email",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        pattern: { value: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, message: 'Formato no correcto' }
                    })} />
            {errors.email && <div className='login--message-errors'><p >{errors.email.message}</p></div>}
            {/* Password */}
            <input spellCheck="false" className='form--input' type="password" placeholder="Contraseña" {
                ...register("password",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        minLength: { value: 6, message: 'La contraseña tiene que tener al menos 6 caracteres' },
                        maxLength: { value: 20, message: 'Tamaño maximo 20' }
                    })} />
            {errors.password && <div className='login--message-errors'><p >{errors.password.message}</p></div>}
            {/* Password Repeat*/}

            <input spellCheck="false" className='form--input' type="password" placeholder="Repite contraseña" {
                ...register("passwordRepeat",
                    {
                        required: { value: true, message: 'Campo requerido' },
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