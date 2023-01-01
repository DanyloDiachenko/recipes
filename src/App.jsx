import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Categories } from './pages/Categories'
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';

function App() {

  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();
  console.log(window.location)

  return (
    <>
      <header className='mx-auto align-items-center row'>
        <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }} className='col-3'>
          Recipies Online
        </h1>
        {window.location.pathname.includes('/recipe') ? (
          ''
        ) : (
          <span className='col-6 text-center'>
            <input placeholder='Write a name of recipe...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className='btn-search' style={{ marginLeft: '10px' }} onClick={() => navigate(`/recipe/${inputValue}`)}>Search</button>
          </span>
        )}
        <h4 className={`d-flex justify-content-end ${window.location.pathname.includes('/recipe') ? 'col-9' : 'col-3'}`}>
          <a href="https://github.com/DanyloDiachenko/recepies">
            Repo
          </a>
        </h4>
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

      <footer className='mt-5 align-items-center d-flex justify-content-between align-items-center'>
        <h5>Copyright © 2023 Receipes. All Right Reserved</h5>
        <h4>
          <a className='text-white' href="https://github.com/DanyloDiachenko/recepies">
            Repo
          </a>
        </h4>
      </footer>
    </>
  );
};

export default App;