import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneBook } from '../services/api-calls'

export default function OneBook() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [genres, setGenres] = useState([])

    useEffect(()=>{
        getOneBook(id)
        .then(res => {
            setData(res.data) 
            setGenres(res.data.genres)})
    },[])
console.log(data)


    return (
        <div>
            <h1>{data.title}</h1>
            <img src={data.imageLink} />
            {genres.map((genre)=>{
               return <li>{genre}</li>
            })}
        </div>
    )
}
