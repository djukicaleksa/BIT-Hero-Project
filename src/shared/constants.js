
import Axios from 'axios';
export const API = Axios.create(
    { baseURL: 'https://gateway.marvel.com:443/v1/public' }
)
export const apiKey = `230dfef498aed52d5b84abc1f9e11d14`;