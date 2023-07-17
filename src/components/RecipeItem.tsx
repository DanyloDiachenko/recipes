import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { RecipeItemProps } from "../interfaces/recipeItem.props";

export const RecipeItem = ({
    img,
    title,
    navigateTo,
}: RecipeItemProps): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <article className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card mt-4">
                <img
                    src={img}
                    alt="Recipe"
                    loading="lazy"
                    width={262}
                    height={262}
                />
                <h3>{title}</h3>
                <div className="d-flex align-items-end">
                    <button
                        onClick={() => navigate("/recipe/" + navigateTo)}
                        className="btn-see-more"
                    >
                        See more
                    </button>
                </div>
            </div>
        </article>
    );
};
