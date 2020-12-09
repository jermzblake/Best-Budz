import tokenService  from './tokenService';
// import {getToken} from './tokenService';

const BASE_URL = '/api/diaries/';
const ENTRY_URL = '/api/entries/';

// eslint-disable-next-line
export default {
    index,
    createDiary,
    createEntry,
    deleteEntry,
    // setDiary,
    // getDiary
  };
  
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
    return fetch(ENTRY_URL, options).then(res => res.json());  // probably shouldn't hard code URL and maybe need to add dynamic :id to BASE_URL?
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
    return fetch(`${ENTRY_URL}/${entry._id}`, options).then(res => res.json());  // probably shouldn't hard code URL and maybe need to add dynamic :id to BASE_URL?

  }

//   export function setDiary(diary) {
//       localStorage.setItem('diary', diary);
//   }

//   export function getDiary() {
//       let diary = localStorage.getItem('diary');
//       return diary;
//   }
  