import axios from "axios";

// Aqui fica o microsserviço utilizado para buscar o CEP.
//03257180/json/


const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"

});

export default api;