import Axios from 'axios'
const { REACT_APP_CURRENCYAPI_KEY: currencyApiKey} = process.env

const api = Axios.create({
    baseURL:`https://v6.exchangerate-api.com/v6/${currencyApiKey}`
})

export default api