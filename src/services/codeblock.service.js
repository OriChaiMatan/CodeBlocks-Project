import Axios from 'axios'
import { httpService } from './http.service.js'

// const BASE_URL = 'http://localhost:3030/api/codeblock/'
const BASE_URL = 'codeblock/'

var axios = Axios.create({
    withCredentials: true
})

export const codeblockService = {
    query,
    getById,
}

async function query() {
    // let { data: codeblocks } = await axios.get(BASE_URL)
    const codeblocks = await httpService.get(BASE_URL)
    return codeblocks
}

async function getById(codeblockId) {
    // const { data: codeblock } = await axios.get(BASE_URL + codeblockId)
    const codeblock = await httpService.get(`${BASE_URL}${codeblockId}`)
    return codeblock
}




