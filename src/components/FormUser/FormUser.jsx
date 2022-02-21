
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import md5 from 'md5';

import './styles.scss';

/**
 * Component for the registration of new users
 * @params theme
 * @returns component react
 */
export default function FormUser(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm(); 
    const password = useRef({}); // to compare and confirm the password
    password.current = watch("password", "");
    let userData = {username:'', password:'', email:''};
    const onSubmit = async (data) => {
        userData.username = data.username; 
        userData.password = md5(data.password); 
        userData.email = data.email};

    //console.log(errors);
    // Se verifica en from o en back?
    // get para verificar si existe o no;
    // post para ingresar el nuevo usario;

    return (
        <form className='form--register' onSubmit={handleSubmit(onSubmit)} >
            {/* User Name */}
            <input className='form--input' type="text" placeholder="Username" {
                ...register("username", 
                {required: {value: true, message:'Campo requerido'}, 
                maxLength: {value: 80, message:'Tamaño maximo 80'}})} />
            {/* Email */}
            <input className='form--input' type="text" placeholder="Email@gmail.com" {
                ...register("email", 
                {required: {value: true, message:'Campo requerido'},
                 pattern: {value: /^\S+@\S+$/i, message: "Formato no correcto"} })} />
            {errors.email && <p className='message--errors'>{errors.email.message}</p>}
            {/* Password */}
            <input className='form--input' type="password" placeholder="Password" {
                ...register("password", 
                {required: {value: true, message:'Campo requerido'}, 
                minleg: {value: 6, message:'La contraseña tiene que tener al menos 6 caracteres'},
                maxLength: {value: 100, message:'Tamaño maximo 80'}})} />
            {errors.password && <p className='message--errors'>{errors.password.message}</p>}
            {/* Password Repeat*/}
            <input className='form--input' type="password" placeholder="Password_repeat" {
                ...register("password_repeat", 
                { validate: value =>
                    value === password.current || "las contraseñas no coinciden"
                })} />
            {errors.password_repeat && <p className='message--errors'>
                {errors.password_repeat.message}</p>}
            
            <input type="submit" />
        </form>
    );
}