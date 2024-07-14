import Axios from 'axios'

var axios = Axios.create({
    withCredentials: true
})

const BASE_URL = 'http://localhost:3030/api/codeblock/'

export const codeblockService = {
    query,
    getById,
}

async function query() {
    let { data: codeblocks } = await axios.get(BASE_URL)
    return codeblocks
}

async function getById(codeblockId) {
    const { data: codeblock } = await axios.get(BASE_URL + codeblockId)
    return codeblock
}




