import { useEffect, useState } from 'react';
import { CategoryItem } from '../components/CategoryItem';

export const Categories = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, []);
    console.log(categories)

    return (
        <>
            <div className='d-flex justify-content-center'>
                <input value={props.value} onChange={props.onChange} />
                <button onClick={props.search}>Search</button>
            </div>
            <h1>Categories</h1>
            {!categories ? <h2>Loading...</h2> : (
                <section className='row'>
                    {categories.map((category) => (
                        <CategoryItem
                            key={category.idCategory}
                            img={category.strCategoryThumb}
                            title={category.strCategory}
                            description={category.strCategoryDescription}
                        />
                    ))}
                </section>
            )}
        </>
    );
};