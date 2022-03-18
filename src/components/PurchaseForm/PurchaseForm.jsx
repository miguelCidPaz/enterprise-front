import React, { useCallback , useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate , useParams } from 'react-router-dom';
import getCompanyData from '../helpers/getCompany';
import getUserByEmail from '../helpers/getUserByEmail';
import buyCompany from '../helpers/buyCompany';
import axios from "axios";
import md5 from "md5";

/**
 * Component purchase form
 * @params theme
 * @returns component react
 */
export default function FormLogin(props) {
    const [companyToBuy , setCompanyToBuy] = useState({});
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
        return res.data;
        
        }).catch((err) => {
            console.log(err);
    })
    };

    const handleBuy = async ()=> {
        const buyeridJson = window.localStorage.getItem('userlogged');
        const buyerid = JSON.parse(buyeridJson);
        buyCompany(buyerid.id, companydataparams.idCompany); 
        alert('offer accepted');
        navigate(`/Profile`)
    };

    const onSubmit = async (data) => {
        await getUserByEmail(data);
        const margin = Math.floor(Math.random() * (20 - 1)) + 1;
        const aux2 = companyToBuy.company_value.replace('$','');
        const aux = aux2.replace(/,/gi,'');
        const companyValue = parseInt(aux);
        const minPriceAccepted = companyValue - (companyValue * margin / 100);
        data.offer >= minPriceAccepted? handleBuy() : alert('offer refussed');
        /* navigate('/') */
    };

    useEffect(() => {
        setData();
    },[]);

    return (
        <div className='form--main'>
            <h3>Introduce tu email y contraseña para validar tu oferta</h3>
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
                <input className='form--input' spellCheck="true" type="text" placeholder="Password" {
                    ...register("password",
                        { required: { value: true, message: 'Campo requerido' } })} />
                {errors.note && <div className='login--message-errors'><p>{errors.note.message}</p></div>}
                {/* Vid */}
                <p>Tu oferta</p>
                <input className='form--input' spellCheck="false" type="number" placeholder="Tu Oferta" {
                    ...register("offer",
                        { required: { value: true, message: 'Campo requerido' } })} />
                {errors.vid && <div className='login--message-errors'><p>{errors.vid.message}</p></div>}

                <input className='login--button' type="submit" />
            </form>
        </div>
    );
}