/* Methods for working with all auth */
import Api from '../services/Api'

export default{
    auth(){
        return Api().get('auth');
    }
}