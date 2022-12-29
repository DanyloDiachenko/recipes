import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Recipe = () => {

    const recipe = useParams().recipe;
    const navigate = useNavigate();

    const [recipeInfo, setRecipeInfo] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe}`)
            .then(res => res.json())
            .then(data => setRecipeInfo(data.meals[0]))
    }, []);

    console.log(recipeInfo)

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h1>Recipe: {recipeInfo.strMeal}</h1>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
            <div className='d-flex justify-content-between mt-5'>
                <div>
                    <div>
                        <h6>
                            Area: {recipeInfo.strArea}
                        </h6>
                    </div>
                    <div>
                        <h6>
                            Category: {recipeInfo.strCategory}
                        </h6>
                    </div>
                    <p className='mt-3' style={{ maxWidth: '80%' }}>{recipeInfo.strInstructions}</p>
                </div>
                <div>
                    <img className='recipe-icon' src={recipeInfo.strMealThumb} alt="Recipe" />
                    <a href={recipeInfo.strYoutube}>Watch <b>{recipeInfo.strMeal}</b> on Youtube</a>
                </div>
            </div>
        </>
    );
};