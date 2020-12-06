import tokenService from './tokenService'

const BASE_URL = '/api/diaries/';

export default {
    index,
    createDiary,

  };
  
  function index() {
    return fetch(BASE_URL).then(res => res.json());
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