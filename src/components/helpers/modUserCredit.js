import axios from "axios";
import md5 from "md5";
    const modUserCredit = async (user,finalCredit) => {
        console.log(user,finalCredit);
        await axios({
            method: 'put',
            url: `http://localhost:3000/v1/users/modcredit/${user}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                finalfounds: finalCredit
            },
        }).then((res) => {
            return res;
            
            }).catch((err) => {
                console.log(err);
        })
    };
    export default modUserCredit;