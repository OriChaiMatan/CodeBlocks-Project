import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const codeblockService = {
    query,
    getById,
}

const STORAGE_KEY = 'codeblocks'

_createCodeBlocks()

async function query() {
    let codeblocks = await storageService.query(STORAGE_KEY)
    return codeblocks
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}


function _createCodeBlocks() {
    let codeblocks = utilService.loadFromStorage(STORAGE_KEY)
    if (!codeblocks || !codeblocks.length) {
        codeblocks = [
            { _id: 'r1', title: 'Async Case' },
            { _id: 'r2', title: 'Loop Case' },
            { _id: 'r3', title: 'Array Case' },
            { _id: 'r4', title: 'Function Case' }
        ]
        utilService.saveToStorage(STORAGE_KEY, codeblocks)
    }
}




