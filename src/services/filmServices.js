import api_user from '../auths/api_user';
const getListFilm = () => {
    return api_user.get(`movie/api/v1/list-movie`);
}
const getFilm = (id) => {
    return api_user.get(`movie/api/v1/get-movie/${id}`);
}
const SearchFilm = (data) => {
    return api_user.post(`movie/api/v1/search-movie`, data);
}
const CreateComment = (data) => {
    return api_user.post(`movie/api/v1/create-comment`, data);
}
const TrainComment = () => {
    return api_user.get(`movie/api/v1/train-comment`);
}
export {
    getListFilm, getFilm, SearchFilm, CreateComment, TrainComment
}