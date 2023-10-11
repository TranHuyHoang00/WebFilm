
const GetLocal_AcountAdmin = () => {
    let data = JSON.parse(window.localStorage.getItem(`${process.env.REACT_APP_LOCALHOST_ACOUNT_ADMIN}`));
    return data
}
const RemoveLocal_AcountAdmin = () => {
    localStorage.removeItem(`${process.env.REACT_APP_LOCALHOST_ACOUNT_ADMIN}`);
    return true
}
const SetLocal_AcountAdmin = (data) => {
    localStorage.setItem(`${process.env.REACT_APP_LOCALHOST_ACOUNT_ADMIN}`, JSON.stringify(
        { data: data }
    ))
}
const GetToken_AccountUser = () => {
    let data = JSON.parse(window.localStorage.getItem(`${process.env.REACT_APP_LOCALHOST_ACOUNT_USER}`));
    return data.data.access
}
const SetLocal_AcountUser = (data) => {
    localStorage.setItem(`${process.env.REACT_APP_LOCALHOST_ACOUNT_USER}`, JSON.stringify(
        { data: data }
    ))
}
const GetLocal_AcountUser = () => {
    let data = JSON.parse(window.localStorage.getItem(`${process.env.REACT_APP_LOCALHOST_ACOUNT_USER}`));
    return data
}
const RemoveLocal_AcountUser = () => {
    localStorage.removeItem(`${process.env.REACT_APP_LOCALHOST_ACOUNT_USER}`);
    return true
}
const GetLocal_Token = () => {
    let data = JSON.parse(window.localStorage.getItem(`${process.env.REACT_APP_LOCALHOST_ACOUNT_USER}`));
    if (data && data.data && data.data.access) {
        return data.data.access
    } else {
        return null
    }
}
export {
    GetLocal_AcountAdmin, SetLocal_AcountAdmin, RemoveLocal_AcountAdmin, GetToken_AccountUser,
    SetLocal_AcountUser, GetLocal_AcountUser, RemoveLocal_AcountUser,
    GetLocal_Token,
}