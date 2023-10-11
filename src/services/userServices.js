import api from '../auths/axio_Api';
const loginUser = (data) => {
    return api.post(`auth/api/v1/login`, data);
}
const registerUser = (data) => {
    return api.post(`auth/api/v1/register`, data);
}
export {
    loginUser, registerUser
}