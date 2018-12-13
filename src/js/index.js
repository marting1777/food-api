import axios from 'axios'

async function getResults(query) {
    const key = 'b5bba737794eb05b6e686fe0963a5409'
    axios.get(`http://food2fork.com/api/search?key=${key}&q=${query}`)

}

getResults()