
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
    //const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, watch, formState: { errors } } = useForm(); 
    /* const password = useRef({});
    console.log(md5(password)); */
    let pwd = watch("password");
    console.log(pwd);
    const onSubmit = async (data) => {console.log(JSON.stringify(data)); alert(JSON.stringify(data));}; 
    console.log(errors);

    return (<>
        <form className='form--register' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Login" {...register("Login", {required: true, maxLength: 80})} />
            <input type="password" placeholder="Password" {...register("Password", {required: true, maxLength: 100})} />
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
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