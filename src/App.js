import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import OneBook from "./components/OneBook"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<OneBook />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

