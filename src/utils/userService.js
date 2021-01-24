import tokenService from './tokenService'

const BASE_URL = '/api/users/';

const functions = {
  signup,
  getUser,
  logout,
  login
}; 

export default functions

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('There was an error - possibly Email already taken!');
  })
   // Parameter destructuring!
   .then(({ token }) => {
    tokenService.setToken(token);
   });
}

function getUser() {
  return tokenService.getUserFromToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function logout() {
  tokenService.removeToken();
}


