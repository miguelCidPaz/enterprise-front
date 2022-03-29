<<<<<<< HEAD
import React, { useCallback , useState , useEffect } from 'react';
=======
import React, { useState , useEffect } from 'react';
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b
import { useForm } from 'react-hook-form';
import { useNavigate , useParams } from 'react-router-dom';
import getCompanyData from '../helpers/getCompany';
import getUserByEmail from '../helpers/getUserByEmail';
import buyCompany from '../helpers/buyCompany';
import axios from "axios";
import md5 from "md5";
<<<<<<< HEAD
=======
import './purchase.scss';
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b

/**
 * Component purchase form
 * @params theme
 * @returns component react
 */
export default function FormLogin(props) {
    const [companyToBuy , setCompanyToBuy] = useState({});
<<<<<<< HEAD
=======
    const [accepted, setAccepted] = useState(false);
    const [openmodal, setOpenmodal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b
    const companydataparams = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const setData = (async () => {
        await getCompanyData(companydataparams.idCompany)
           .then ((newData) => {
               setCompanyToBuy(newData.data[0]);
           })
        .catch((err) => {
            console.log('error');
        })});
  
<<<<<<< HEAD

/*     const setUser = useCallback(async (a) => {
        console.log('dentro usecallback user');
        await getUserByEmail(a)
           .then ((newData) => {
               console.log(newData.data[0]);
           })
        .catch((err) => {
            console.log('error');
        })
   },[companydata]); */
   
=======
 
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b
   const getUserByEmail = async (datas) => {
    let codedpassword = md5(datas.password)
    await axios({
        method: 'post',
        url: 'http://localhost:3000/v1/users/email',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: {
            email: datas.email,
            userpass: codedpassword
        },
    }).then((res) => {
<<<<<<< HEAD
        return res.data;
=======
        
        if (res.status === 200 && res.data.username) {
            onSubmit(datas);
        }
        else if (res.status === 200) {
            setErrorMessage("Contraseña equivocada");
            setErrorModal(true);
        }
        else {
            setErrorMessage("Usuario no encontrado");
            setErrorModal(true);
        }
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b
        
        }).catch((err) => {
            console.log(err);
    })
    };

    const handleBuy = async ()=> {
<<<<<<< HEAD
        const buyeridJson = window.localStorage.getItem('userlogged');
        const buyerid = JSON.parse(buyeridJson);
        buyCompany(buyerid.id, companydataparams.idCompany); 
        alert('offer accepted');
        navigate(`/Profile`)
    };

    const onSubmit = async (data) => {
        await getUserByEmail(data);
=======
        if (accepted) {
        const buyeridJson = window.localStorage.getItem('userlogged');
        const buyerid = JSON.parse(buyeridJson);
        await buyCompany(buyerid.id, companydataparams.idCompany); 
        navigate(`/Profile`)            
        }
    };

    const onSubmit = async (data) => {
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b
        const margin = Math.floor(Math.random() * (20 - 1)) + 1;
        const aux2 = companyToBuy.company_value.replace('$','');
        const aux = aux2.replace(/,/gi,'');
        const companyValue = parseInt(aux);
        const minPriceAccepted = companyValue - (companyValue * margin / 100);
<<<<<<< HEAD
        data.offer >= minPriceAccepted? handleBuy() : alert('offer refussed');
        /* navigate('/') */
=======
        setOpenmodal(true);
        data.offer >= minPriceAccepted? setAccepted(true) : setAccepted(false);
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b
    };

    useEffect(() => {
        setData();
    },[]);

<<<<<<< HEAD
    return (
        <div className='form--main'>
            <h3>Introduce tu email y contraseña para validar tu oferta</h3>
            <form className='form--login' onSubmit={handleSubmit(onSubmit)} >
=======
    useEffect(() => {
        handleBuy();
    },[openmodal])

    return (<>
        <div className='form--main'>
        {errorModal && <div className='form--error-modal'>
                <p className='form--error-modal-text'>{errorMessage}</p>
                <button className='form--error-modal-button' onClick={()=>setErrorModal(false)}>Aceptar</button>
            </div>}            
            <h3 className='purchase--form'>Introduce tu email y contraseña para validar tu oferta</h3>
            <form className={`form--login ${props.theme}`} onSubmit={handleSubmit(getUserByEmail)} >
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b
                {/* Email */}
                <input className='form--input' spellCheck="false" type="text" placeholder="Email@gmail.com" {
                    ...register("email",
                        {
                            required: { value: true, message: 'Campo requerido' },
                            pattern: { value: /^\S+@\S+$/i, message: "Formato no correcto" }
                        })} />
                {errors.email && <div className='login--message-errors'><p>{errors.email.message}</p></div>}
                {/* Note */}
                <input className='form--input' spellCheck="true" type="password" placeholder="Password" {
                    ...register("password",
                        { required: { value: true, message: 'Campo requerido' } })} />
                {errors.note && <div className='login--message-errors'><p>{errors.note.message}</p></div>}
                {/* Vid */}
<<<<<<< HEAD
                <p>Tu oferta</p>
=======
                <p className='purchase--form'>Tu oferta</p>
>>>>>>> 6ccd820f44b86df807c44e161e7ddf4e465e452b
                <input className='form--input' spellCheck="false" type="number" placeholder="Tu Oferta" {
                    ...register("offer",
                        { required: { value: true, message: 'Campo requerido' } })} />
                {errors.vid && <div className='login--message-errors'><p>{errors.vid.message}</p></div>}

                <input className='login--button' type="submit" />
            </form>
        </div>
        {openmodal && <div className='modal'>
            {accepted? <p>Oferta Aceptada</p> : <p>Oferta Rechazada</p>}
            <button type='button' onClick={()=> setOpenmodal(false)}>Aceptar</button>
        </div>}</>
    );
}