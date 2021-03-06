import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import AuthenticationActions from './authActions';
/**
 * @description SignupActions class
 */
export default class SignupActions {
  /**
   * @description user signup request action
   * @param {object} userData
   * @return {*} axios
   */
  static userSignupRequest(userData) {
    return (dispatch) => {
      return axios.post('/api/v1/user/signup', userData)
        .then((res) => {
          const token = res.data.token;
          /**
           * this saves the token in the localstorage as a key value object
           */
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          /**
           * the jwtDecode is a small browser library that helps
           * decoding JWTs token which are Base64Url encoded
           */
          dispatch(AuthenticationActions.setCurrentUser(jwtDecode(token)));
        });
    };
  }
  /**
   * @description checks if a user exists
   * @param {string} identifier
   * @return {*} axios
   */
  static isUserExists(identifier) {
    return () => {
      return axios.get(`/api/v1/user/${identifier}`);
    };
  }
  /**
   * @description updates password
   * @param {string} newUser
   * @return {*} axios
   */
  static updatePassword(newUser) {
    return () => {
      return axios.put('/api/v1/user/signup', newUser);
    };
  }
}
