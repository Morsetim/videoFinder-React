import axios from 'axios'; 


const KEY = 'AIzaSyAm__PALLY5fz4eywLnW7QSQqOL56skWeM';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults: 8,
        key: KEY
    }
})