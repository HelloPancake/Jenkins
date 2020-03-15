const fetch = require('node-fetch')

const isPositive = (n) => {
    return n > 0
}

const range = (n) => {
    const numbers = [];

    for (let i=1; i <= n; i++ ){
        numbers.push(i)
    }

    return numbers
}

const double = (arr) => {

    for (let i=0; i < arr.length; i++){
        arr[i] = arr[i] * 2
    }

    return arr
}

class Dog {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    bark(){
        return `${this.name} Barks`
    }

    run(){
        return `${this.name} runs`
    }
}

const fetchDirector = async (title) => {
    let apiUrl = `http://www.omdbapi.com/?t=${title}&apikey=3a92536e`
    let response = await fetch(apiUrl)
    let movieInfo = await response.json()
    return movieInfo.Director
}


module.exports = {isPositive, range, double, Dog, fetchDirector}

