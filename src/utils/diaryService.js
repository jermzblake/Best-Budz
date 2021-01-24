import tokenService  from './tokenService';
// import {getToken} from './tokenService';

const BASE_URL = '/api/diaries/';
const ENTRY_URL = '/api/entries/';

// eslint-disable-next-line
const functions = {
    index,
    createDiary,
    createEntry,
    deleteEntry,
    getEntry,
    updateEntry,
};

export default functions
  
function index() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => res.json());
}
  
function createDiary(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(user)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function createEntry(entry) {
    const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(entry)
    };
    return fetch(ENTRY_URL, options).then(res => res.json());  
}

function deleteEntry(entry) {
      console.log(entry._id)
    const options = {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(entry)
    };
    return fetch(`${ENTRY_URL}/${entry._id}`, options).then(res => res.json());  
}

function getEntry(entryUrl) {
    return fetch(`${ENTRY_URL}/${entryUrl}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => res.json());
}

function updateEntry(entry) {
    const options = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(entry)
    };
    return fetch(`${ENTRY_URL}/${entry.id}`, options).then(res => res.json());  
} 