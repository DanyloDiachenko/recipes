import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { IRecipeInfo } from "src/interfaces/recipeInfo.interface";

export const Recipe = (): JSX.Element => {
    const { recipe } = useParams();
    const navigate = useNavigate();

    const [recipeInfo, setRecipeInfo] = useState<IRecipeInfo | null>(null);
    const [randomMealInfo, setRandomMealInfo] = useState<IRecipeInfo | null>(
        null
    );

    useEffect(() => {
        const fetchRecipeInfo = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}search.php?s=${recipe}`
                );
                const data = await response.json();
                setRecipeInfo(data.meals?.[0] || null);
            } catch (error) {
                console.error("Error fetching recipe info:", error);
            }
        };

        const fetchRandomMealInfo = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}random.php`
                );
                const data = await response.json();
                setRandomMealInfo(data.meals?.[0] || null);
            } catch (error) {
                console.error("Error fetching random meal info:", error);
            }
        };

        fetchRecipeInfo();
        fetchRandomMealInfo();
    }, [recipe]);

    const ingredients = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        ingredient: recipeInfo?.[`strIngredient${index + 1}`] || "",
        measure: recipeInfo?.[`strMeasure${index + 1}`] || "",
    }));

    const renderRecipeDetails = () => {
        if (!recipeInfo) return <h4>Nothing Found...</h4>;

        return (
            <div className="d-flex justify-content-between mt-5 row">
                <div className="col-lg-8 col-sm-12">
                    <div>
                        <h6>
                            Area: <b>{recipeInfo.strArea}</b>
                        </h6>
                    </div>
                    <div className="mt-1">
                        <h6>
                            Category: <b>{recipeInfo.strCategory}</b>
                        </h6>
                    </div>
                    <h3 className="mt-4">Ingredients:</h3>
                    <div style={{ maxWidth: "80%" }}>
                        {ingredients.map((item) => (
                            <div
                                key={item.id}
                                className="mt-2 d-flex align-items-center"
                            >
                                {item.ingredient && (
                                    <>
                                        <h5>
                                            {item.id}) {item.ingredient}
                                        </h5>
                                        <span style={{ margin: "0 5px" }}>
                                            -
                                        </span>
                                        <h5>{item.measure}</h5>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 recipe-desc" style={{ maxWidth: "80%" }}>
                        {recipeInfo.strInstructions}
                    </p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img
                        style={{ width: "100%" }}
                        className="recipe-icon"
                        src={recipeInfo.strMealThumb}
                        alt="Recipe"
                        loading="lazy"
                    />
                    <div className="text-center mt-2">
                        <a href={recipeInfo.strYoutube}>
                            Watch <b>{recipeInfo.strMeal}</b> on Youtube
                        </a>
                        {randomMealInfo && (
                            <div className="mt-5">
                                <h2>Try today</h2>
                                <div
                                    className="card mx-auto mt-3 p-2"
                                    style={{ width: "75%" }}
                                >
                                    <img
                                        src={randomMealInfo.strMealThumb}
                                        alt="Recipe"
                                    />
                                    <h4 className="mt-1">
                                        {randomMealInfo.strMeal}
                                    </h4>
                                    <p className="mt-2">
                                        {randomMealInfo.strInstructions
                                            ? randomMealInfo.strInstructions.slice(
                                                  0,
                                                  100
                                              )
                                            : ""}
                                        ...
                                    </p>
                                    <div
                                        className="d-flex align-items-end"
                                        style={{ height: "100%" }}
                                    >
                                        <Link
                                            to={
                                                "/recipe/" +
                                                randomMealInfo.strMeal
                                            }
                                        >
                                            <button className="btn-see-more mt-3">
                                                See more
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                {recipeInfo?.strMeal ? (
                    <h1>Recipe: {recipeInfo.strMeal}</h1>
                ) : (
                    <h1>Recipe: {recipe}</h1>
                )}
                <button className="btn-go-back" onClick={() => navigate(-1)}>
                    Go back
                </button>
            </div>
            {renderRecipeDetails()}
        </>
    );
};
