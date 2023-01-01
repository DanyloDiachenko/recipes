import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Recipe = () => {

    const recipe = useParams().recipe;
    const navigate = useNavigate();

    const [recipeInfo, setRecipeInfo] = useState({});
    const [randomMealInfo, setRandomMealInfo] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
            .then(res => res.json())
            .then(data => setRecipeInfo(data.meals[0]));

        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(data => setRandomMealInfo(data.meals[0]));
    }, []);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
            .then(res => res.json())
            .then(data => setRecipeInfo(data.meals[0]));
    }, [recipe]);

    console.log(randomMealInfo)

    const ingredients = [
        {
            id: 1,
            ingredient: recipeInfo.strIngredient1,
            measure: recipeInfo.strIngredient1,
        },
        {
            id: 2,
            ingredient: recipeInfo.strIngredient2,
            measure: recipeInfo.strIngredient2,
        },
        {
            id: 3,
            ingredient: recipeInfo.strIngredient3,
            measure: recipeInfo.strIngredient3,
        },
        {
            id: 4,
            ingredient: recipeInfo.strIngredient4,
            measure: recipeInfo.strIngredient4,
        },
        {
            id: 5,
            ingredient: recipeInfo.strIngredient5,
            measure: recipeInfo.strIngredient5,
        },
        {
            id: 6,
            ingredient: recipeInfo.strIngredient6,
            measure: recipeInfo.strIngredient6,
        },
        {
            id: 7,
            ingredient: recipeInfo.strIngredient7,
            measure: recipeInfo.strIngredient7,
        },
        {
            id: 8,
            ingredient: recipeInfo.strIngredient8,
            measure: recipeInfo.strIngredient8,
        },
        {
            id: 9,
            ingredient: recipeInfo.strIngredient9,
            measure: recipeInfo.strIngredient9,
        },
        {
            id: 10,
            ingredient: recipeInfo.strIngredient10,
            measure: recipeInfo.strIngredient10,
        },
        {
            id: 11,
            ingredient: recipeInfo.strIngredient11,
            measure: recipeInfo.strIngredient11,
        },
        {
            id: 12,
            ingredient: recipeInfo.strIngredient12,
            measure: recipeInfo.strIngredient12,
        },
        {
            id: 13,
            ingredient: recipeInfo.strIngredient13,
            measure: recipeInfo.strIngredient13,
        },
        {
            id: 14,
            ingredient: recipeInfo.strIngredient14,
            measure: recipeInfo.strIngredient14,
        },
        {
            id: 15,
            ingredient: recipeInfo.strIngredient15,
            measure: recipeInfo.strIngredient15,
        },
        {
            id: 16,
            ingredient: recipeInfo.strIngredient16,
            measure: recipeInfo.strIngredient16,
        },
        {
            id: 17,
            ingredient: recipeInfo.strIngredient17,
            measure: recipeInfo.strIngredient17,
        },
        {
            id: 18,
            ingredient: recipeInfo.strIngredient18,
            measure: recipeInfo.strIngredient18,
        },
        {
            id: 19,
            ingredient: recipeInfo.strIngredient19,
            measure: recipeInfo.strIngredient19,
        },
        {
            id: 20,
            ingredient: recipeInfo.strIngredient20,
            measure: recipeInfo.strIngredient20,
        },
    ];

    return (
        <>
            <div className='d-flex justify-content-between'>
                {recipeInfo.length ? (
                    <h1>Recipe: {recipeInfo.strMeal}</h1>
                ) : (
                    <h1>Recipe: {recipe}</h1>
                )}
                <button className="btn-go-back" onClick={() => navigate(-1)}>Go back</button>
            </div>
            {recipeInfo.idMeal ? (
                <div className='d-flex justify-content-between mt-5 row'>
                    <div className='col-lg-8 col-sm-12'>
                        <div>
                            <h6>
                                Area: <b>{recipeInfo.strArea}</b>
                            </h6>
                        </div>
                        <div className='mt-1'>
                            <h6>
                                Category: <b>{recipeInfo.strCategory}</b>
                            </h6>
                        </div>
                        <h3 className="mt-4">Ingredients:</h3>
                        <div style={{ maxWidth: '80%' }}>
                            {ingredients.map((item) => (
                                <div key={item.id} className="mt-2 d-flex align-items-center">
                                    {item.ingredient && (
                                        <>
                                            <h5>{item.id}) {item.ingredient}</h5>
                                            <span style={{ margin: '0 5px' }}>-</span>
                                            <h5>{item.measure}</h5>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        <p className='mt-4 recipe-desc' style={{ maxWidth: '80%' }}>{recipeInfo.strInstructions}</p>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <img style={{ width: '100%' }} className='recipe-icon' src={recipeInfo.strMealThumb} alt="Recipe" />
                        <div className='text-center mt-2'>
                            <a href={recipeInfo.strYoutube}>Watch <b>{recipeInfo.strMeal}</b> on Youtube</a>

                            {randomMealInfo && (
                                <div className='mt-5'>
                                    <h2>Try today</h2>
                                    <div className="card mx-auto mt-3 p-2" style={{ width: '75%' }}>
                                        <img src={randomMealInfo.strMealThumb} alt="Recipe" />
                                        <h4 className='mt-1'>{randomMealInfo.strMeal}</h4>
                                        <p className='mt-2'>{randomMealInfo.strInstructions ? randomMealInfo.strInstructions.slice(0, 100) : ''}...</p>
                                        <div className='d-flex align-items-end' style={{ height: '100%' }}>
                                            <Link style={{ width: '100%' }} to={'/recipe/' + randomMealInfo.strMeal}>
                                                <button className='btn-see-more mt-3'>See more</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : <h4>Nothing Found...</h4>}
        </>
    );
};