import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Categories } from './pages/Categories'
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';

function App() {

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
      /* www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata */
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  return (
    <>
      <header>
        <h5>header</h5>
      </header>

      <main className='container'>
        <Routes>
          <Route exact path="/" element={<Categories
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            search={() => navigate(`/recipe/${inputValue}`)} />}
          />

          <Route path="/category/:category" element={<Category />} />

          <Route path="/recipe/:recipe" element={<Recipe />} />

          <Route element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <h5>footer</h5>
      </footer>
    </>
  );
};

export default App;