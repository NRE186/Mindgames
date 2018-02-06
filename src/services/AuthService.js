/* Methods for working with all auth */
import Api from '../services/Api'

export default{
    register(){
        return Api().post('/register');
    }
}