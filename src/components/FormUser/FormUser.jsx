
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import md5 from 'md5';

import './styles.scss';

/**
 * Component for loading all products of a category
 * @params theme
 * @returns component react
 */
export default function FormUser(props) {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    let userData = {username:'', password:'', email:''};
    const onSubmit = async (data) => {
        userData.username = data.username; 
        userData.password = md5(data.password); 
        userData.email = data.email}
    //console.log(errors);
    

    return (<>
        <form className='form--register' onSubmit={handleSubmit(onSubmit)}>
            <input className='form--input' type="text" placeholder="Username" {...register("username", 
                {required: {value: true, message:'Campo requerido'}, 
                maxLength: {value: 80, message:'Tamaño maximo 80'}})} />
            <input className='form--input' type="password" placeholder="Password" {...register("password", 
                {required: {value: true, message:'Campo requerido'}, 
                minleg: {value: 6, message:'La contraseña tiene que tener al menos 6 caracteres'},
                maxLength: {value: 100, message:'Tamaño maximo 80'}})} />
            {errors.password && <p className='message--errors'>{errors.password.message}</p>}
            <input className='form--input' type="text" placeholder="Email@gmail.com" {...register("email", 
                {required: {value: true, message:'Campo requerido'},
                 pattern: {value: /^\S+@\S+$/i, message: "Formato no correcto"} })} />
            {errors.email && <p className='message--errors'>{errors.email.message}</p>}
            <input type="submit" />
        </form>
        {/* <form onSubmit={e => e.preventDefault()}>
            <label>Password</label>
            <input
                name="password"
                type="password"
                ref={register({
                    required: "You must specify a password",
                    minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                    }
                })}
                />
            {errors.password && <p>{errors.password.message}</p>}
    
            <label>Repeat password</label>
            <input
                name="password_repeat"
                type="password"
                ref={register({
                    validate: value =>
                    value === password.current || "The passwords do not match"
                })}
                />
            {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
    
            <input type="submit" onClick={handleSubmit(onSubmit)} />
        </form> */}
        </>
    );
}