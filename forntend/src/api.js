import axios from 'axios';

export const checkNewsAPI = async (article) => {
    return await axios.post('/api/check-news/', { article });
};

export const analyzeTweetsAPI = async (username) => {
    return await axios.post('/api/analyze-tweets/', { username });
};

//Explanation: This file contains API functions for making requests to the backend. It uses Axios to handle HTTP requests.