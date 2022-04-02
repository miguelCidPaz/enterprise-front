import React, { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate , useParams } from 'react-router-dom';
import getCompanyData from '../helpers/getCompany';
import modUserCredit from '../helpers/modUserCredit';
import buyCompany from '../helpers/buyCompany';
import axios from "axios";
import md5 from "md5";
import './purchase.scss';

/**
 * Component purchase form
 * @params theme
 * @returns component react
 */
export default function FormLogin(props) {
    const [companyToBuy , setCompanyToBuy] = useState({});
    const [accepted, setAccepted] = useState(false);
    const [openmodal, setOpenmodal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [higherOffer, setHigherOffer] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [finalCredit, setFinalCredit] = useState();
    const companydataparams = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const buyeridJson = window.localStorage.getItem('userlogged');
    const buyerid = JSON.parse(buyeridJson);
    
    const setData = (async () => {
        await getCompanyData(companydataparams.idCompany)
           .then ((newData) => {
               setCompanyToBuy(newData.data[0]);
           })
        .catch((err) => {
            console.log('error');
        })});
  
    //this function makes a post petition to cheeck user email and passwrd, if they match it calls onSubmit function
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
        
        if (res.status === 200 && res.data.username) {
            console.log('datos de la petición');
            console.log(res.data);
            onSubmit(datas, res.data.founds);
        }
        else if (res.status === 200) {
            setErrorMessage("Contraseña equivocada");
            setErrorModal(true);
        }
        else {
            setErrorMessage("Usuario no encontrado");
            setErrorModal(true);
        }
        
        }).catch((err) => {
            console.log(err);
    })
    };

    //this function recover user data from localStorage and calls helper buyCompany to send the put petition
    const handleBuy = async ()=> {
        if (accepted) {
        await buyCompany(buyerid.id, companydataparams.idCompany); 
        await modUserCredit(buyerid.id, finalCredit);
        window.localStorage.setItem('userlogged',JSON.stringify({session:true, id:buyerid.id, username:buyerid.username, email:buyerid.email, founds:finalCredit}));  
        navigate(`/Profile`)            
        }
    };
    const onSubmit = async (data,credit) => {
        if (credit >= data.offer) {
            const margin = Math.floor(Math.random() * (20 - 1)) + 1;
            const aux2 = companyToBuy.company_value.replace('$','');
            const aux = aux2.replace(/,/gi,'');
            const companyValue = parseInt(aux);
            const minPriceAccepted = companyValue - (companyValue * margin / 100);
            setOpenmodal(true);
            setFinalCredit(credit - data.offer);
            data.offer >= minPriceAccepted? setAccepted(true) : setAccepted(false);
        }
        else {
            setHigherOffer(true);
        }
    };

    useEffect(() => {
        setData();
    },[]);

    useEffect(() => {
        handleBuy();
    },[openmodal])

    return (<>
        <div className='form--main'>
        {errorModal && <div className='form--error-modal'> {/* modal for wrong user or password */}
                <p className='form--error-modal-text'>{errorMessage}</p>
                <button className='form--error-modal-button' onClick={()=>setErrorModal(false)}>Aceptar</button>
        </div>}            
        {higherOffer && <div className='form--error-modal'>{/*  modal for offer higher than founds */}
                <p className='form--error-modal-text'>No tienes suficientes fondos</p>
                <button className='form--error-modal-button' onClick={()=>setHigherOffer(false)}>Aceptar</button>
        </div>}            
        <h3 className='purchase--form'>Introduce tu email y contraseña para validar tu oferta</h3>
        <form className={`form--login ${props.theme}`} onSubmit={handleSubmit(getUserByEmail)} >
            {/* Email */}
            <input className='form--input' spellCheck="false" type="text" placeholder="Email" {
                ...register("email",
                    {
                        required: { value: true, message: 'Campo requerido' },
                        pattern: { value: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, message: "Formato no correcto" }
                    })} />
            {errors.email && <div className='login--message-errors'><p>{errors.email.message}</p></div>}
            {/* Password */}
            <input className='form--input' spellCheck="true" type="password" placeholder="Contraseña" {
                ...register("password",
                    { required: { value: true, message: 'Campo requerido' } })} />
            {errors.password && <div className='login--message-errors'><p>{errors.password.message}</p></div>}
            {/* user credit */}
            <p className='purchase--form'>Tu saldo: {buyerid.founds}</p>
            {/* Offer */}
            <p className='purchase--form'>Tu oferta</p>
            <input className='form--input' spellCheck="false" type="number" placeholder="Tu Oferta" {
                ...register("offer",
                    { required: { value: true, message: 'Campo requerido' } })} />
            {errors.offer && <div className='login--message-errors'><p>{errors.offer.message}</p></div>}
            <input className='login--button' type="submit" />
        </form>
        </div>
        {openmodal && <div className='modal'>
            {accepted? <p>Oferta Aceptada</p> : <p>Oferta Rechazada</p>}
            <button type='button' onClick={()=> setOpenmodal(false)}>Aceptar</button>
        </div>}</>
 );
}