import axios from 'axios'

export const getAllBooks = () => {
    return axios.get('https://wp-library-backend.herokuapp.com/books')

}