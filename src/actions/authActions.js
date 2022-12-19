import axios from "axios";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../helpers/endpoints";
import setAuthToken from "../helpers/setAuthToken";
import jwtDecode from "jwt-decode";
import { SET_CURRENT_USER } from "./types";

export const loginUser = (userData) => dispatch => {
    console.log(userData);
    return new Promise((resolve, reject) => {
        axios.post(LOGIN_ENDPOINT, userData, {
            headers: {'Accept': 'application/json', 'Content-type': 'application/json'}
        }).then(response => {

            const { authorization } = response.headers;

            localStorage.setItem('jwtToken', authorization);

            setAuthToken(authorization);

            const decoded = jwtDecode(authorization);

            dispatch(setCurrentUser({ user: decoded, loggedIn: true }));

            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });
}

export const registerUser = (userData) => dispatch => {
    console.log(userData);
    return new Promise((resolve, reject) => {
        axios.post(REGISTER_ENDPOINT, userData, {
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export const setCurrentUser = ({ user, loggedIn }) => {
    return {
        type: SET_CURRENT_USER,
        payload: { user, loggedIn }
    };
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');

    setAuthToken(false);

    dispatch(setCurrentUser({
        user: {},
        loggedIn: false
    }));
}