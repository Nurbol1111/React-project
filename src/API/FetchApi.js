import axios from "axios";

export default class FetchApi {
    static async getSkills(){
        return await axios.get('https://6711253c4eca2acdb5f3d6c3.mockapi.io/skills')
    }

    static async postSkills(name, range) {
        return await axios.post(`https://6711253c4eca2acdb5f3d6c3.mockapi.io/skills`, {name: name, range: range})
    }
}