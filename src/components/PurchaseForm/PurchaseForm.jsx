import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


/**
 * Component purchase form
 * @params theme
 * @returns component react
 */
export default function FormLogin(props) {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        navigate('/')
    };

    return (
        <div className='form--main'>
            <form className='form--login' onSubmit={handleSubmit(onSubmit)} >
                {/* Email */}
                <input className='form--input' spellCheck="false" type="text" placeholder="Email@gmail.com" {
                    ...register("email",
                        {
                            required: { value: true, message: 'Campo requerido' },
                            pattern: { value: /^\S+@\S+$/i, message: "Formato no correcto" }
                        })} />
                {errors.email && <div className='login--message-errors'><p>{errors.email.message}</p></div>}
                {/* Note */}
                <input className='form--input' spellCheck="true" type="text" placeholder="Note" {
                    ...register("note",
                        { required: { value: true, message: 'Campo requerido' } })} />
                {errors.note && <div className='login--message-errors'><p>{errors.note.message}</p></div>}
                {/* Vid */}
                <input className='form--input' spellCheck="false" type="number" placeholder="Vid" {
                    ...register("vid",
                        { required: { value: true, message: 'Campo requerido' } })} />
                {errors.vid && <div className='login--message-errors'><p>{errors.vid.message}</p></div>}

                <input className='login--button' type="submit" />
            </form>
        </div>
    );
}