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
        console.log(companyToModify)
    
    let dateString = companyToModify.creation_date
    
    console.log(dateString)
    

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { session, id, name, email, connectSession } = useContext(UserContext);

    const navigate = useNavigate();
    //let dataInsert = {iduser: user }
    const onSubmit = async (resultForm) => {

        await axios({
            method: 'put',
            url: 'http://localhost:3000/v1/companies/modCompany',
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
            if (res.status === 201) {
                navigate('/Profile');
            }
        })
    };

    //crear condicional para que los inputs muestren los datos antiguos en caso de que no se modifique ningún input
    function handleChange(e){
        e.preventDefault();
    }
    

    return (
        <div className='form--main'>
            <form className='form--login form--tobottom' onSubmit={handleSubmit(onSubmit)} >
                <h3>Modificar {companyToModify.name_description}</h3>
                <div className='section--inputs'>
                <label>Nombre</label>
                <input className='form--input' onChange={handleChange} placeholder={companyToModify.name_description} type="text" {
                    ...register("Nombre",
                        {
                            required: { value: true, message: 'Campo requerido' },
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

                {/* ¿Cómo poner una fecha (por ahora, hasta conseguir pasar date a localstorage) por defecto. Esta fecha tendrá que estar bloqueada. Buscar en la aplicación de Mensajería */}

                <label>Fecha de creación</label>
                <input className='form--input' type="date" {
                    ...register("FechaCreacion", { required: false })} />
                {/* Logotipo */}
                <label>Logotipo</label>
                <input className='form--input' type="url" placeholder={companyToModify.logo} {
                    ...register("Logotipo", { required: false })} />
                {/* Pagina Web */}
                <label>Página web</label>
                <input className='form--input' type="url" placeholder={companyToModify.webpage}{
                    ...register("PaginaWeb", { required: false })} />
                {/* Numero de Telefono */}
                <label>Número de empleados</label>
                <input className='form--input' type="number" placeholder={companyToModify.num_employees} {
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
                    ...register("Numerodeempleados", { required: false })} />
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