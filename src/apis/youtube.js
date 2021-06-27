import axios from 'axios';

const KEY="AIzaSyCA58ZvqzZ20vW0rSiJJ_YxAQXj1RVfLDs";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

