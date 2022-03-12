import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react'
import { UserContext } from '../ProviderLogin'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';


/**
 * Component form login
 * @params theme
 * @returns component react
 */
export default function FormLogin(props) {
    // login or new user discriminator
    const { register, handleSubmit, formState: { errors } } = useForm();
    let userData = { email: '', password: '' };
    const { session, connectSession } = useContext(UserContext);
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        userData.email = data.username;
        userData.password = md5(data.password)

        await axios({
            method: 'post',
            url: 'http://localhost:3000/v1/users/',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                email: userData.email,
                userpass: userData.password
            },
        }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                if (connectSession(true, res.data.id, res.data.username, res.data.email)) {
                    navigate("/Profile");
                }
            } else {
                connectSession(false, undefined, undefined, undefined)
            }
        })


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