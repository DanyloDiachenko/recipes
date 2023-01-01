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
      <header className='container align-items-center row mx-auto'>
        <h1 className='col-3'>
          Recipies Online
        </h1>
        <span className='col-6 text-center'>
          <input placeholder='Write a name of recipe...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className='btn-search' style={{ marginLeft: '10px' }} search={() => navigate(`/recipe/${inputValue}`)}>Search</button>
        </span>
        <h6 className='col-3 d-flex justify-content-end'>Repo</h6>
      </header>

      <main className='container mx-auto mt-5'>
        <Routes>
          <Route exact path="/" element={<Categories />}
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