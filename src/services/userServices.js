import api_user from '../auths/api_user';
const loginUser = (data) => {
    return api_user.post(`auth/api/v1/login`, data);
}
const registerUser = (data) => {
    return api_user.post(`auth/api/v1/register`, data);
}
export {
    loginUser, registerUser
}