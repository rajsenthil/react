import Axios from 'axios'

const KEY="AIzaSyCK8C5l4i8jtKn8KKm5IfMbA4nIVXl3vjk";

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});