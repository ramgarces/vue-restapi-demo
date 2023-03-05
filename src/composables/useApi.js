import axios from 'axios'
import { ref } from 'vue'

const instance = axios.create({
    baseURL: 'https://api.disneyapi.dev/'
})

const useApi = () => { 
    return { instance }
}

export default useApi