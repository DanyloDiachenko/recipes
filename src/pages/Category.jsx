import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RecipeItem } from '../components/RecipeItem';

export const Category = () => {

    const category = useParams().category;
    const navigate = useNavigate();

    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => res.json())
            .then(data => setRecipies(data.meals))
    }, []);

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h1>Category: {category}</h1>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
            {!recipies ? <h2>Loading...</h2> : (
                <section className='row'>
                    {recipies.map((recipe) => (
                        <RecipeItem
                            navigateTo={recipe.idMeal}
                            key={recipe.idMeal}
                            img={recipe.strMealThumb}
                            title={recipe.strMeal}
                        />
                    ))}
                </section>
            )}
        </>
    );
};