import axios from "axios";
const buyCompany = async (userid, companyid) => {
    const response = await axios.put(`http://localhost:3000/v1/companies/buy/${userid}/${companyid}`);
     
    return response
}
  export default buyCompany;