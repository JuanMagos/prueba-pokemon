import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import PokemonDetailProvider from './context/PokemonDetailProvider';

function App() {
  return (
    <PokemonDetailProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </PokemonDetailProvider>
  );
}

export default App;
