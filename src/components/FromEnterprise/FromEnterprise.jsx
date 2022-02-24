
import React, { useContext } from 'react';


/**
 * Component company creation form
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
            <input type="text" placeholder="Nombre" {...register("Nombre", {required: true, maxLength: 80})} />
            <input type="text" placeholder="Sector" {...register("Sector", {required: true, maxLength: 100})} />
            {/* Es posible q la fecha solo incluya mes/año o solo año o q me toquen las pelotas con otros formatos? */}
            <input type="datetime" placeholder="Fecha creacion" {...register("Fecha creacion", {required: true})} /> 
            <input type="url" placeholder="Logotipo" {...register("Logotipo", {required: true})} />
            <input type="url" placeholder="Pagina Web" {...register("Pagina Web", {required: true})} />
            <input type="number" placeholder="Numero de Telefono" {...register("Numero de Telefono", {required: true})} />
            <input type="text" placeholder="Social Media" {...register("Social Media", {required: true})} />
            <textarea {...register("Descripcion", {required: true})} />
            <input type="number" placeholder="Valoracion" {...register("Valoracion", {required: true})} />
            <input type="number" placeholder="Numero de empleados" {...register("Numero de empleados", {required: true})} />
            <input type="url" placeholder="imagen" {...register("imagen", {required: true})} />

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
    </div>
    );
}