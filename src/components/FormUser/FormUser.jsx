
import React , { useState , useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import './styles.scss';

/**
 * Component for loading all products of a category
 * @params theme
 * @returns component react
 */
 export default function FormUser(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Login" {...register("Login", {required: true, maxLength: 80})} />
            <input type="password" placeholder="Password" {...register("Password", {required: true, maxLength: 100})} />
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

            <input type="submit" />
        </form>
    );

 }