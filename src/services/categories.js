import axios from 'axios';

export const serviceConfig = {
    API_URL: 'https://acklen-backend-core.herokuapp.com/api/Category'
}

export const getCategories = async () => {
    const { data } = await axios.get(`${serviceConfig.API_URL}`);
    return await data;
}

export const getCategoryById = async (id) => {
    const { data } = await axios.get(`${serviceConfig.API_URL}/${id}`);
    return await data;
}