import './styles.scss';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
//import { UserContext } from "../Login";

/**
 * Component company creation form
 * @params theme
 * @returns component react
 */
export default function FormEnterprise(props) {
    //const { user } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    //let dataInsert = {iduser: user }
    const onSubmit = async (data) => {
        console.log(data)
    };

    //post companies/create

    return (
        <div className='form--main'>
            <form className='form--login form--tobottom' onSubmit={handleSubmit(onSubmit)} >
                {/* Nombre */}
                <input className='form--input' type="text" placeholder="Nombre" {
                    ...register("Nombre",
                        {
                            required: { value: true, message: 'Campo requerido' },
                            maxLength: { value: 80, message: 'Tamaño maximo 80' }
                        })} />
                {errors.Nombre && <p className='message--errors'>{errors.Nombre.message}</p>}
                {/* Sector */}
                <input className='form--input' type="text" placeholder="Sector" {
                    ...register("Sector", {
                        required: false,
                        maxLength: { value: 100, message: 'Tamaño maximo 100' }
                    })} />
                {errors.Nombre && <p className='message--errors'>{errors.Nombre.message}</p>}
                {/* Fecha creacion */}
                {/* Es posible q la fecha solo incluya mes/año o solo año o q me toquen las pelotas con otros formatos? */}
                <input className='form--input' type="datetime" placeholder="Fecha Creacion" {
                    ...register("Fecha Creacion", { required: false })} />
                {/* Logotipo */}
                <input className='form--input' type="url" placeholder="Logotipo" {
                    ...register("Logotipo", { required: false })} />
                {/* Pagina Web */}
                <input className='form--input' type="url" placeholder="Pagina Web" {
                    ...register("Pagina Web", { required: false })} />
                {/* Numero de Telefono */}
                <input className='form--input' type="number" placeholder="Numero de Telefono" {
                    ...register("Numero de Telefono", { required: false })} />
                {/* Social Media */}
                <input className='form--input' type="text" placeholder="Social Media" {
                    ...register("Social Media", { required: false })} />
                {/* Descripcion */}
                <textarea className='form--input' {
                    ...register("Descripcion", { required: false })} />
                {/* Valoracion */}
                <input className='form--input' type="number" placeholder="Valoracion" {
                    ...register("Valoracion", { required: false })} />
                {/* Numero de empleados */}
                <input className='form--input' type="number" placeholder="Numero de empleados" {
                    ...register("Numero de empleados", { required: false })} />
                {/* imagen */}
                <input className='form--input' type="url" placeholder="Imagen" {
                    ...register("Imagen", { required: false })} />

                <input className='login--button' type="submit" />
            </form>
        </div>
    );
}