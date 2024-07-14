import Axios from 'axios'

// const BASE_URL = 'http://localhost:3030/api/codeblock/'
const BASE_URL = (process.env.NODE_ENV === 'production') ? '/api/codeblock/': 'http://localhost:3030/api/codeblock/'

var axios = Axios.create({
    withCredentials: true
})

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




