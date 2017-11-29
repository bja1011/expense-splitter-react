/**
 * Created by adam on 27.11.17.
 */
import axios from 'axios';

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios.post(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDLmHtZtBT7ln4l5ankYHerXmChWhNiC8s',
      {
        email: username,
        password: password,
        returnSecureToken: true
      }
    )
      .then((resp) => {
        localStorage.setItem('idToken', resp.data.idToken)
        localStorage.setItem('refreshToken', resp.data.refreshToken)
        resolve(resp)
      })
  })
};

const logout = () => {
  localStorage.removeItem('idToken');
  localStorage.removeItem('refreshToken');
}

export default login;