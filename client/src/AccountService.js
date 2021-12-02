import axios from "axios"

const url = '/api/v1/'

class AccountService {
     async getMe() {
        let d =  await axios.get(`${url}users/@me`)
        d = d.data;
        return d;
    }
}

export default new AccountService();
