import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react'
import { Context } from '../ProviderLogin'
import md5 from 'md5';


/**
 * Component form login
 * @params theme
 * @returns component react
 */
export default function FormLogin(props) {
    // login or new user discriminator
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useContext(Context);
    let userData = { username: '', password: '' };
    const onSubmit = async (data) => {
        userData.username = data.username;
        userData.password = md5(data.password)
    };

    // get para recuperar el usario;

    return (<div className='form--main'>
        <form className='form--login' onSubmit={handleSubmit(onSubmit)} >
            {/* User Name */}
            <input spellCheck="false" className='form--input' type="text" placeholder="Username" {
                ...register("username",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        maxLength: { value: 80, message: 'Tamaño maximo 80' }
                    })} />
            {errors.username && <p className='login--message-errors'>{errors.username.message}</p>}
            {/* Password */}
            <input spellCheck="false" className='form--input' type="password" placeholder="Password" {
                ...register("password",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        minleg: { value: 6, message: 'La contraseña tiene que tener al menos 6 caracteres' },
                        maxLength: { value: 20, message: 'Tamaño maximo 20' }
                    })} />
            {errors.password && <p className='login--message-errors'>{errors.password.message}</p>}

            <input className='login--button' type="submit" />
        </form>
        <button className='login--button login--navigation' onClick={() => props.setView(false)}>Registrarse</button>
    </div>
    );
}