
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from "../Login";
import md5 from 'md5';

//import './styles.scss';

/**
 * Component login
 * @params theme
 * @returns component react
 */
 export default function FormLogin(props) {
    // login or new user discriminator
    const { setLogin } = useContext(LoginContext);

    const { register, handleSubmit, formState: { errors } } = useForm(); 
    let userData = {username:'', password:''};
    const onSubmit = async (data) => {
        userData.username = data.username; 
        userData.password = md5(data.password)};

    return (<div>
        <form className='form--login' onSubmit={handleSubmit(onSubmit)} >
            {/* User Name */}
            <input className='form--input' type="text" placeholder="Username" {
                ...register("username", 
                {required: {value: true, message:'Campo requerido'}, 
                maxLength: {value: 80, message:'Tamaño maximo 80'}})} />
            {errors.username && <p className='message--errors'>{errors.username.message}</p>}
            {/* Password */}
            <input className='form--input' type="password" placeholder="Password" {
                ...register("password", 
                {required: {value: true, message:'Campo requerido'}, 
                minleg: {value: 6, message:'La contraseña tiene que tener al menos 6 caracteres'},
                maxLength: {value: 20, message:'Tamaño maximo 20'}})} />
            {errors.password && <p className='message--errors'>{errors.password.message}</p>}

            <input type="submit" />
        </form>
        <button onClick={() => setLogin(false)}>Registrarse</button>
       {/*  <button onClick={() => setLogin(null)}>Cambiar Contraseña</button> */}
    </div>
    );
}