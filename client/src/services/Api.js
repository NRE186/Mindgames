import axios from 'axios';

export default() => {
    return axios.create({
        url: "http://localhost:1488"
    })
}