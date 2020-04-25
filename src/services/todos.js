import apiOrigin from './api';

export const getTodos = () => {
    return fetch(`${apiOrigin}/todos`).then(res => res.json());
}