import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [booksData, setBooksData] = useState([])

  useEffect(()=>{
    axios.get('https://wp-library-backend.herokuapp.com/books')
    .then(res => setBooksData(res.data))
  },[])
  console.log(booksData)
  return (
    <div className="App">
      {booksData.map((book)=>{
        return (
          <div>
            <h1>{book.title}</h1>\
            <img src={book.imageLink} />
            </div>
        )
      })}
    </div>
  );
}

export default App;

