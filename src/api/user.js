import axios from 'axios';
import { getPlatUrl } from './platUrl';

const keyRememberedUser = 'rememberedUser';

export function getRememberedUser() {
  return localStorage.getItem(keyRememberedUser);
}

export function setRememberedUser(username) {
  localStorage.setItem(keyRememberedUser, username);
}

export function login(username, password) {
  const action = '/mobileApp/dologin';
  const url = `${getPlatUrl()}${action}`;
  const params = Object.assign({}, {
    username,
    password
  });
  return axios.post(url, params)
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(err => {
      console.log(`post ${action} failed:  ${err}`);
      Promise.reject();
    });
}
