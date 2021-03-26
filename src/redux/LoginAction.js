import axios from "axios"

const API_URL = 'https://reqres.in/api/'

const postLogin = (body) => async (dispatch) => {
    await axios
        .post(`${API_URL}login`, { ...body })
        .then((ress) => {
            // console.log(ress)
            if (ress.status === 200) {
                dispatch({
                    type: 'LOG_IN',
                    payload: ress.data,
                    token: localStorage.setItem('token', ress.data.token)
                })
                alert("Login success")
            }
        })
        .catch((err) => alert("check email & password"))
}

export {
    postLogin
}