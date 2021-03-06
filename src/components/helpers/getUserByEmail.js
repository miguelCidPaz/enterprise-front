import axios from "axios";
import md5 from "md5";
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
            return res;
            
            }).catch((err) => {
                console.log(err);
        })
    };
    export default getUserByEmail;