import axios from "axios";
const getCompany = async (id) => {
    const response = await axios.get(`http://localhost:3000/v1/companies/company/${id}`);
     
    return response
}
  export default getCompany;