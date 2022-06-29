import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CharacterList from './components/CharacterList';
import CharacterInfo from './components/CharacterInfo';
import Search from './components/Search';

function App() {
  return (
    <>
      <Nav />
      <div className="flex bg-gray-100 py-24 justify-center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterInfo />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      {/* Navigation */}
      {/* Main Content */}
    </>
  );
}

export default App;
