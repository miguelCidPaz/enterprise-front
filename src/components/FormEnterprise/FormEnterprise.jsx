import './styles.scss';
import React, { useContext} from 'react';
import { UserContext } from '../Login/ProviderLogin';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';


/**
 * Component company creation form
 * @params theme
 * @returns component react
 */

export default function FormEnterprise(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { session, id, name, email, connectSession } = useContext(UserContext);
    const navigate = useNavigate();
    const onSubmit = async (resultForm) => {

     
    await axios({
        method: 'post',
        url: 'http://localhost:3000/v1/companies/create', 
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: {
            iduser: id,
            name_description: resultForm.Nombre,
            sector: resultForm.Sector,
            creation_date: resultForm.FechaDeCreacion,
            logo: resultForm.Logotipo,
            webpage: resultForm.PaginaWeb,
            phone_number: resultForm.NumerodeTelefono,
            social_media: resultForm.SocialMedia,
            company_description: resultForm.Descripcion,
            company_value: resultForm.Valoracion,
            num_employees: resultForm.Numerodeempleados,
            images: resultForm.Imagen
        }
    }).then((res) => {
        console.log(res.data)
        if (res.status === 201) {
            navigate('/Profile');
        }
    })
}


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
                {errors.Nombre && <p className='login--message-errors'>{errors.Nombre.message}</p>}
                {/* Sector */}
                {/* <input className='form--input' type="select" placeholder="Sector" {
                    ...register("Sector", {
                        required: false,
                        maxLength: { value: 100, message: 'Tamaño maximo 100' }
                    })} /> */}
                <select className='form--input' placeholder="Sector" {
                    ...register("Sector", {
                        required: false,
                        maxLength: { value: 100, message: 'Tamaño maximo 100' }
                    })}>
                    <option value='Marketing'>Marketing</option>
                    <option value='Finanzas'>Finanzas</option>
                    <option value='Derecho'>Derecho</option>
                    <option value='Prensa'>Prensa</option>
                    <option value='Hosteleria'>Hosteleria</option>
    
                </select> 
                {errors.Nombre && <p className='login--message-errors'>{errors.Nombre.message}</p>}
                <input className='form--input' type="date" placeholder="Fecha Creacion" {
                    ...register("FechaCreacion", { required: false })} />
                {/* Logotipo */}
                <input className='form--input' type="url" placeholder="Logotipo" {
                    ...register("Logotipo", { required: false })} />
                {/* Pagina Web */}
                <input className='form--input' type="url" placeholder="Pagina Web" {
                    ...register("PaginaWeb", { required: false })} />
                {/* Numero de Telefono */}
                <input className='form--input' type="number" placeholder="Numero de Telefono" {
                    ...register("NumerodeTelefono", { required: false })} />
                {/* Social Media */}
                <input className='form--input' type="text" placeholder="Social Media" {
                    ...register("SocialMedia", { required: false })} />
                {/* Valoracion */}
                <input className='form--input' type="number" placeholder="Valoracion" {
                    ...register("Valoracion", { required: false })} />
                {/* Numero de empleados */}
                <input className='form--input' type="number" placeholder="Numero de empleados" {
                    ...register("Numerodeempleados", { required: false })} />
                {/* imagen */}
                <input className='form--input' type="url" placeholder="Imagen" {
                    ...register("Imagen", { required: false })} />
                {/* Descripcion */}
                <textarea className='form--input' type="text" placeholder="Descripcion"{
                    ...register("Descripcion", { required: false })} />
                <input className='login--button' type="submit" />
            </form>
        </div>
    );
}