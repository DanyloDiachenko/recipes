import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Categories } from './pages/Categories'
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';

function App() {

  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  return (
    <>
      <header>
        <h5>header</h5>
      </header>

      <main className='container mx-auto'>
        <Routes>
          <Route exact path="/" element={<Categories
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            search={() => navigate(`/recipe/${inputValue}`)} />}
          />

          <Route path="/category/:category" element={<Category />} />

          <Route path="/recipe/:recipe" element={<Recipe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <h5>footer</h5>
      </footer>
    </>
  );
};

export default App;