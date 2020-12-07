import tokenService  from './tokenService';
// import {getToken} from './tokenService';

const BASE_URL = '/api/diaries/';

// eslint-disable-next-line
export default {
    index,
    createDiary,
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

//   export function setDiary(diary) {
//       localStorage.setItem('diary', diary);
//   }

//   export function getDiary() {
//       let diary = localStorage.getItem('diary');
//       return diary;
//   }
  