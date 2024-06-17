import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.29.240:5000/'
});