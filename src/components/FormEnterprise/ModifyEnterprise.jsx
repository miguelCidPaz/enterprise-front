import './styles.scss';
import React, { useContext } from 'react';
import { UserContext } from '../Login/ProviderLogin';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

//import { UserContext } from "../Login";

/**
 * Component company creation form
 * @params theme
 * @returns component react
 */




export default function Modifyenterprise(props) {
    const companyToModifyJSON = window.localStorage.getItem('companyToModify')
    let companyToModify = JSON.parse(companyToModifyJSON);

    //we change creation date from ISO8601 format to string 
    let dateString = new Date(companyToModify.time_modification);
    dateString = dateString.toLocaleDateString();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { session, id, name, email, connectSession } = useContext(UserContext);

    const navigate = useNavigate();
    const onSubmit = async (resultForm) => {

        await axios({
            method: 'put',
            url: `http://localhost:3000/v1/companies/mod/${companyToModify.idcompany}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                iduser: id,
                name_description: resultForm.Nombre? resultForm.Nombre: companyToModify.name_description,
                sector: resultForm.Sector? resultForm.Sector : companyToModify.sector,
                creation_date: companyToModify.creation_date,
                logo: resultForm.Logotipo? resultForm.Logotipo : companyToModify.logo,
                webpage: resultForm.PaginaWeb? resultForm.PaginaWeb : companyToModify.webpage,
                phone_number: resultForm.NumerodeTelefono? resultForm.NumerodeTelefono : companyToModify.phone_number,
                social_media: resultForm.SocialMedia? resultForm.SocialMedia : companyToModify.social_media,
                company_description: resultForm.Descripcion? resultForm.Descripcion : companyToModify.company_description,
                company_value: resultForm.Valoracion? resultForm.Valoracion : companyToModify.company_value,
                num_employees: resultForm.NumerodeEmpleados? resultForm.NumerodeEmpleados : companyToModify.num_employees,
                images: resultForm.Imagen? resultForm.Imagen : companyToModify.images
            }
        }).then((res) => {
            if (res.status === 201) {
                alert('Compañía modificada con éxito')
                navigate('/Profile');
            }
        })
    };

 
    return (
        <div className='form--main'>
            <form className='form--login form--tobottom' onSubmit={handleSubmit(onSubmit)} >
                <h3 className='purchase--form'>Modificar datos de empresa {companyToModify.name_description}</h3>
                <div className='section--inputs'>
                <label>Nombre</label>
                <input className='form--input'  placeholder={companyToModify.name_description} type="text" {
                    ...register("Nombre",
                        {
                            /* required: { value: true, message: 'Campo requerido' }, */
                            maxLength: { value: 80, message: 'Tamaño maximo 80' }
                        })} />
                {errors.Nombre && <p className='login--message-errors'>{errors.Nombre.message}</p>}
                <label>Sector</label>
                <select className='form--input' value={companyToModify.sector} {
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

                <label>Fecha de creación</label>
                <input className='form--input' type="text" value={dateString} disable{
                    ...register("FechaDeCreacion", { required: false })} />
                {/* Logotipo */}
                <label>Logotipo</label>
                <input className='form--input' type="url" placeholder={companyToModify.logo} {
                    ...register("Logotipo", { required: false })} />
                {/* Pagina Web */}
                <label>Página web</label>
                <input className='form--input' type="url" placeholder={companyToModify.webpage}{
                    ...register("PaginaWeb", { required: false })} />
                {/* Numero de Telefono */}
                <label>Número de teléfono</label>
                <input className='form--input' type="number" placeholder={companyToModify.phone_number} {
                    ...register("NumerodeTelefono", { required: false })} />
                {/* Social Media */}
                <label>Social Media</label>
                <input className='form--input' type="text" placeholder={companyToModify.social_media} {
                    ...register("SocialMedia", { required: false })} />
                {/* Valoracion */}
                <label>Valoración</label>
                <input className='form--input' type="number" placeholder={companyToModify.company_value} {
                    ...register("Valoracion", { required: false })} />
                {/* Numero de empleados */}
                <label>Número de empleados</label>
                <input className='form--input' type="number" placeholder={companyToModify.num_employees}{
                    ...register("NumerodeEmpleados", { required: false })} />
                {/* imagen */}
                <label>Imagen</label>
                <input className='form--input' type="url" placeholder={companyToModify.images} {
                    ...register("Imagen", { required: false })} />
                {/* Descripcion */}
                <label>Descripcion</label>
                <textarea className='form--input' type="text" placeholder={companyToModify.company_description}{
                    ...register("Descripcion", { required: false })} />
                </div>
                <input className='login--button' type="submit" />
            </form>
        </div>
    );
}