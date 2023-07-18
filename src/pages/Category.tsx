import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { RecipeItem } from "../components/RecipeItem";
import { IRecipe } from "src/interfaces/recipe.interface";

export const Category = (): JSX.Element => {
    const category = useParams().category;
    const navigate = useNavigate();

    const [recipies, setRecipies] = useState<IRecipe[]>([]);
    const [filtredRecipies, setFiltredRecipies] = useState<IRecipe[]>(recipies);
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}filter.php?c=${category}`)
            .then((res) => res.json())
            .then((data) => setRecipies(data.meals));
    }, []);

    useEffect(() => {
        let data: IRecipe[] = recipies;

        if (inputValue) {
            data = data.filter((recipe) =>
                recipe.strMeal.toLowerCase().includes(inputValue.toLowerCase())
            );
        }

        setFiltredRecipies(data);
    }, [recipies, inputValue]);

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1>
                    Category: <b>{category}</b>
                </h1>
                <button className="btn-go-back" onClick={() => navigate(-1)}>
                    Go back
                </button>
            </div>
            {filtredRecipies && (
                <div className="d-flex justify-content-center">
                    <div>
                        <h3 className="text-center">Search a recipe</h3>
                        <input
                            className="mt-2"
                            placeholder="Write a name of recipe..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                </div>
            )}
            {!filtredRecipies.length ? (
                <h4>Nothind Found...</h4>
            ) : (
                <section className="row">
                    {filtredRecipies &&
                        filtredRecipies.map((recipe) => (
                            <RecipeItem
                                navigateTo={recipe.strMeal}
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
