import { loginStart, loginSuccess, loginFailed } from "./userReduxSlice";
import axios from "axios";




export const login = async (dispatch, user) => {
    dispatch(loginStart())

    let url = "http://localhost:5000/api/auth/login"

    try {
        const apiRes = await axios.post( url, user)
        dispatch(loginSuccess(apiRes.data))

    } catch(err) {
        dispatch(loginFailed(err))
    }
}