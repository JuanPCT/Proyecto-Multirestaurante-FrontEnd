import jwt_decode from 'jwt-decode';
import { logoutUser, setCurrentUser } from '../actions/authActions';
import store from "../store";
import setAuthToken from "./setAuthToken";

const checkForToken = () => {
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const decoded = jwt_decode(localStorage.jwtToken);      

        store.dispatch(setCurrentUser({
            user: decoded,
            loggedIn: true
        }));

        const currentTime = Math.floor(Date.now() / 1000);

        if (decoded.exp < currentTime) {
            store.dispatch(logoutUser());
            window.location.href = "/signin";
        }

    }
}

export default checkForToken;