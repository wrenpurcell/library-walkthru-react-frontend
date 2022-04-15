import axios from 'axios'
const URL = 'https://wp-library-backend2.herokuapp.com/books/'

export const getAllBooks = () => {
    return axios.get(URL)

}

export const getOneBook = id => {
    return axios.get(`${URL}${id}`)
}