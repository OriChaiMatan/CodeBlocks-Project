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
            {
                _id: 'r1',
                title: 'Async Case',
                code: `async function fetchData() {
              try {
                const response = await fetch('https://api.example.com/data');
                const data = await response.json();
                console.log(data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            }`
            },
            {
                _id: 'r2',
                title: 'Loop Case',
                code: `for (let i = 0; i < 5; i++) {
              console.log('Iteration:', i);
            }`
            },
            {
                _id: 'r3',
                title: 'Array Case',
                code: `const fruits = ['apple', 'banana', 'cherry'];
            
            fruits.forEach(fruit => {
              console.log('Fruit:', fruit);
            });`
            },
            {
                _id: 'r4',
                title: 'Function Case',
                code: `function greet(name) {
              return 'Hello, ' + name + '!';
            }
            
            console.log(greet('World'));`
            }
        ]
        utilService.saveToStorage(STORAGE_KEY, codeblocks)
    }
}




