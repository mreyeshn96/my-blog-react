import axios from 'axios';

export const serviceConfig = {
    API_URL: 'https://localhost:44347/api/Post'
}

export const getPostsByCategory = async (id) => {
    const { data } = await axios.get(`${serviceConfig.API_URL}/category/${id}`);
    return await data;
}

export const createPost = async (cat_id, user_id, object) => {
    const data = {
        categoryId: cat_id,
        title: object.title,
        body: object.body,
        userId: user_id,
    };

    console.log(data);

    return await axios.post(`${serviceConfig.API_URL}/create`, data);

}