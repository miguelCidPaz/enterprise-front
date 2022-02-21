
import React from 'react';
import { useForm } from 'react-hook-form';
import md5 from 'md5';

import './styles.scss';

/**
 * Component login
 * @params theme
 * @returns component react
 */
 export default function FormUser(props) {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    let userData = {username:'', password:''};
    const onSubmit = async (data) => {
        userData.username = data.username; 
        userData.password = md5(data.password)};

    return (
        <form className='form--register' onSubmit={handleSubmit(onSubmit)} >
            {/* User Name */}
            <input className='form--input' type="text" placeholder="Username" {
                ...register("username", 
                {required: {value: true, message:'Campo requerido'}, 
                maxLength: {value: 80, message:'Tamaño maximo 80'}})} />
            {/* Password */}
            <input className='form--input' type="password" placeholder="Password" {
                ...register("password", 
                {required: {value: true, message:'Campo requerido'}, 
                minleg: {value: 6, message:'La contraseña tiene que tener al menos 6 caracteres'},
                maxLength: {value: 100, message:'Tamaño maximo 80'}})} />
            {errors.password && <p className='message--errors'>{errors.password.message}</p>}

            <input type="submit" />
        </form>
    );
}