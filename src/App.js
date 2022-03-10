import Main from './components/Main'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Electronics" element={<Main />} />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
