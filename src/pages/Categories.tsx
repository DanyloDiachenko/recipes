import React, { useEffect, useState } from "react";

import { CategoryItem } from "../components/CategoryItem";
import { ICategory } from "src/interfaces/category.interface";

export const Categories = (): JSX.Element => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        if (!categories.length) {
            fetch(`${process.env.REACT_APP_API_URL}categories.php`)
                .then((res) => res.json())
                .then((data) => setCategories(data.categories));
        }
    }, []);

    if (!categories) {
        <h2>Loading...</h2>;
    }

    return (
        <>
            <h1 className="text-center">Choose a Category</h1>
            <section className="row">
                {categories.map((category) => (
                    <CategoryItem
                        navigateTo={category.strCategory}
                        key={category.idCategory}
                        img={category.strCategoryThumb}
                        title={category.strCategory}
                        description={category.strCategoryDescription}
                    />
                ))}
            </section>
        </>
    );
};
