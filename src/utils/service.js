const api= 'http://localhost:3000/initalState';


class Api {
    async getPin(){
        const query = await fetch(api);
        const data = await query.json();
        return data
    }
}
export default new Api();