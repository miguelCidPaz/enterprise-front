
import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.scss';


/**
 * Component purchase form
 * @params theme
 * @returns component react
 */
export default function FormLogin(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    };

    return (
        <form className='form--login' onSubmit={handleSubmit(onSubmit)} >
            {/* Email */}
            <input spellCheck="false" className='form--input' type="text" placeholder="Email@gmail.com" {
                ...register("email",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        pattern: { value: /^\S+@\S+$/i, message: "Formato no correcto" }
                    })} />
            {errors.email && <div className='message--errors'><p>{errors.email.message}</p></div>}
            {/* Note */}
            <input spellCheck="true" className='form--input' type="text" placeholder="Note" {
                ...register("note",
                    { required: { value: true, message: 'Campo requerido' } })} />
            {errors.note && <div className='message--errors'><p>{errors.note.message}</p></div>}
            {/* Vid */}
            <input spellCheck="false" className='form--input' type="number" placeholder="Vid" {
                ...register("vid",
                    { required: { value: true, message: 'Campo requerido' } })} />
            {errors.vid && <div className='message--errors'><p>{errors.vid.message}</p></div>}

            <input type="submit" />
        </form>
    );
}