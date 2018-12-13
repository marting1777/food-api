import axios from 'axios'

export default class Search {
    constructor (query) {
        this.query = query

    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = 'b5bba737794eb05b6e686fe0963a5409'
    
        try {
            const res = await axios.get(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`)
            this.result = res.data.recipes
            // console.log(this.result)
        } catch (err) {
            console.log(err)
        }
        
    }
}