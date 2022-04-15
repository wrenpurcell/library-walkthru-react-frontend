import { useState, useEffect } from "react"
import { getAllBooks } from "../services/api-calls"

export default function Home() {
    const [booksData, setBooksData] = useState([])

    useEffect(() => {
        getAllBooks()
      .then(res => setBooksData(res.data))
    }, [])


    console.log(booksData)

    return (
        <div>
             {booksData.map((book)=>{
        return (
          <div>
           <a href={`/${book._id}`}>
            <h1>{book.title}</h1>
            <img src={book.imageLink} alt={`${book.title} cover art`}/>
            </a>
            </div>
        )
      })}
        </div>
    )
}
