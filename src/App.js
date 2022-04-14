import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [booksData, setBooksData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/books')
    .then(res => setBooksData(res.data))
  },[])
  console.log(booksData)
  return (
    <div className="App">

    </div>
  );
}

export default App;

