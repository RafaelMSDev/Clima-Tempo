import axios from 'axios';

// https://api.hgbrasil.com/weather?key=c736525e&lat=-23.682&lon=-46.875

export const key ='2dc494a3';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com'
});

export default api;