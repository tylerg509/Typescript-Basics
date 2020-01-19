import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

//this lecture we just run some code in ts
axios.get(url).then(response => {
    console.log(response.data)
})

