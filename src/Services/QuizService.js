import axios from 'axios'
import { URL } from 'react-native-url-polyfill';

const BaseUrl = "https://quizapi.io/api/v1/"
const ApiKey = "PKRfaReJgiqHdGPQcGNbzwgAQ0DSmuE6ycD6Njzh"

const Init = () => {
    const baseURL = new URL("questions", BaseUrl)
    baseURL.searchParams.set("apiKey", ApiKey)
    return baseURL
}

const RetrieveQuestion = async () => {
    const u = Init()
    u.searchParams.set("limit", 1)
    const response = await axios.get(u.toString())
    if (response.status <= 200 && response.status < 300) {
        console.log(response.data[0])
        return response.data[0]
    }
    return "error"
}

export default RetrieveQuestion