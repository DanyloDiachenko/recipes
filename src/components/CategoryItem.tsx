import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { CategoryItemProps } from "../interfaces/categoryItem.props";

export const CategoryItem = ({
    img,
    title,
    description,
    navigateTo,
}: CategoryItemProps): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <article className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card mt-4">
                <img src={img} alt="Recipe" loading="lazy" />
                <h3>{title}</h3>
                <p className="mt-2">{description.slice(0, 150)}...</p>
                <div
                    className="d-flex align-items-end mt-2"
                    style={{ height: "100%" }}
                >
                    <button
                        className="btn-see-more"
                        onClick={() => navigate("/category/" + navigateTo)}
                    >
                        See more
                    </button>
                </div>
            </div>
        </article>
    );
};
