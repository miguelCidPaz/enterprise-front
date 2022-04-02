import { useForm } from 'react-hook-form';
import { useContext , useState } from 'react'
import { UserContext } from '../ProviderLogin'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';


/**
 * Component form login
 * @params theme
 * @returns component react
 */
export default function FormLogin(props) {
    // login or new user discriminator
    const { register, handleSubmit, formState: { errors } } = useForm();
    let userData = { username: '', password: '' };
    const { session, connectSession } = useContext(UserContext);
    const navigate = useNavigate();
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const onSubmit = async (data) => {
        userData.username = data.username;
        userData.password = md5(data.password)
        await axios({
            method: 'post',
            url: 'https://enterprisecompany-server.herokuapp.com/v1/users/',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                username: userData.username,
                userpass: userData.password
            },
        }).then((res) => {
            if (res.status === 200 && res.data.username) {
                console.log(res.data);
                    connectSession(true, res.data.id, res.data.username, res.data.email, res.data.founds); 
                    window.localStorage.setItem('userlogged',JSON.stringify({session:true, id:res.data.id, username:res.data.username, email:res.data.email, founds:res.data.founds}));  
                    navigate("/Profile");
                }
            else if (res.status === 200) {
                setErrorMessage("Contraseña equivocada");
                setErrorModal(true);
            }
            else {
                setErrorMessage("Usuario no encontrado");
                setErrorModal(true);
                connectSession(false, undefined, undefined, undefined)
            }
        })
    };
    //meter un useEffect para renderizar con el cambio de session ???????????????????????????????????????????????????
    //y meter un  modal con un estado para que se renderize el mensaje en lugar de usar un alert????????????????????????????
    // get para recuperar el usario;

    return (
        <div className='form--main'>
            {errorModal && <div className='form--error-modal'>
                <p className='form--error-modal-text'>{errorMessage}</p>
                <button className='form--error-modal-button' onClick={()=>setErrorModal(false)}>Aceptar</button>
            </div>}
            <form className='form--login' onSubmit={handleSubmit(onSubmit)} >
                {/* User Name */}
                <input spellCheck="false" className='form--input' type="text" placeholder="Username" {
                    ...register("username",
                        {
                            required: { value: true, message: 'Campo requerido' },
                            maxLength: { value: 80, message: 'Tamaño maximo 80' }
                        })} />
                {errors.username && <p className='login--message-errors'>{errors.username.message}</p>}
                {/* Password */}
                <input spellCheck="false" className='form--input' type="password" placeholder="Password" {
                    ...register("password",
                        {
                            required: { value: true, message: 'Campo requerido' },
                            minLength: { value: 6, message: 'La contraseña tiene que tener al menos 6 caracteres' },
                            maxLength: { value: 20, message: 'Tamaño maximo 20' }
                        })} />
                {errors.password && <p className='login--message-errors'>{errors.password.message}</p>}

                <input className='login--button' type="submit" />
            </form>
            <button className='login--button login--navigation' onClick={() => props.setView(false)}>Registrarse</button>
        </div>
    );
}