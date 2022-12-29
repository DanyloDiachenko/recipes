import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Categories } from './pages/Categories'
import { Recipies } from './pages/Recipies';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
      /* www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata */
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      <header>
        <h3>header</h3>
      </header>

      <Router>
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/recipies" element={<Recipies />} />
          <Route path="/recipe/:recipe" element={<Recipe />} />
        </Routes>
      </Router>

      <footer>
        <h3>footer</h3>
      </footer>
    </>
  );
};

export default App;