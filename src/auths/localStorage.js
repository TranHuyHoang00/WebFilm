
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
export {
    GetLocal_AcountAdmin, SetLocal_AcountAdmin, RemoveLocal_AcountAdmin,
}