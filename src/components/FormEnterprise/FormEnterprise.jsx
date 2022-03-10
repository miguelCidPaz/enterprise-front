
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
        console.log(data)};

    //post companies/create

    return (
        <form className='form--login' onSubmit={handleSubmit(onSubmit)} >
            {/* Nombre */}
            <input type="text" placeholder="Nombre" {
                ...register("Nombre", 
                {required: {value: true, message:'Campo requerido'},
                maxLength: {value: 80, message:'Tamaño maximo 80'}})} />
            {errors.Nombre && <p className='message--errors'>{errors.Nombre.message}</p>}
            {/* Sector */}
            <input type="text" placeholder="Sector" {
                ...register("Sector", {required: false,
                maxLength: {value: 100, message:'Tamaño maximo 100'}})} />
            {errors.Nombre && <p className='message--errors'>{errors.Nombre.message}</p>}
            {/* Fecha creacion */}
            {/* Es posible q la fecha solo incluya mes/año o solo año o q me toquen las pelotas con otros formatos? */}
            <input type="datetime" placeholder="Fecha Creacion" {
                ...register("Fecha Creacion", {required: false})} /> 
            {/* Logotipo */}
            <input type="url" placeholder="Logotipo" {
                ...register("Logotipo", {required: false})} />
            {/* Pagina Web */}
            <input type="url" placeholder="Pagina Web" {
                ...register("Pagina Web", {required: false})} />
            {/* Numero de Telefono */}
            <input type="number" placeholder="Numero de Telefono" {
                ...register("Numero de Telefono", {required: false})} />
            {/* Social Media */}
            <input type="text" placeholder="Social Media" {
                ...register("Social Media", {required: false})} />
            {/* Valoracion */}
            <input type="number" placeholder="Valoracion" {
                ...register("Valoracion", {required: false})} />
            {/* Numero de empleados */}
            <input type="number" placeholder="Numero de empleados" {
                ...register("Numero de empleados", {required: false})} />
            {/* imagen */}
            <input type="url" placeholder="Imagen" {
                ...register("Imagen", {required: false})} />
            {/* Descripcion */}
            <textarea placeholder="Descripcion" {
                ...register("Descripcion", {required: false})} />

            <input type="submit" />
        </form>
    );
}