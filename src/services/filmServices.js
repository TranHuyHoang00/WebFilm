import api from '../auths/axio_Api';
const getListFilm = () => {
    return api.get(`movie/api/v1/list-movie`);
}
const getFilm = (id) => {
    return api.get(`movie/api/v1/get-movie/${id}`);
}
const SearchFilm = (data) => {
    return api.post(`movie/api/v1/search-movie`, data);
}
const CreateComment = (data) => {
    return api.post(`movie/api/v1/create-comment`, data);
}
const TrainComment = () => {
    return api.get(`movie/api/v1/train-comment`);
}
export {
    getListFilm, getFilm, SearchFilm, CreateComment, TrainComment
}