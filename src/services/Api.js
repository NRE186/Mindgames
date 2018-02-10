/* Main api file for working with backend server */
import axios from 'axios';

export default() => {
    return axios.create({
        url: 'http://localhost:5000'
    })
}