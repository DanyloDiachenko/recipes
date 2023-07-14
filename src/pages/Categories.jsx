import { useEffect, useState } from "react";

import { CategoryItem } from "../components/CategoryItem";

export const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (!categories.length) {
            fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
                .then(res => res.json())
                .then(data => setCategories(data.categories))
        }
    }, []);

    if (!categories) {
        <h2>Loading...</h2>
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