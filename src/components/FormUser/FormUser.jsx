
import React from 'react';
import { useForm } from 'react-hook-form';
import md5 from 'md5';

import './styles.scss';

/**
 * Component for loading all products of a category
 * @params theme
 * @returns component react
 */
export default function FormUser(props) {
    const { register, handleSubmit, formState: { errors } } = useForm(); //
    const onSubmit = (data) => {console.log(data); alert(JSON.stringify(data));}; //preventDefault(); 
    console.log(errors);

    return (
        <form className='form--register' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Login" {...register("Login", {required: true, maxLength: 80})} />
            <input type="password" placeholder="Password" {...register("Password", {required: true, maxLength: 100})} />
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="submit" />
        </form>
    );
}