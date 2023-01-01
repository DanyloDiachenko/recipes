import { useEffect, useState } from 'react';
import { CategoryItem } from '../components/CategoryItem';

export const Categories = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (!categories.length) {
            fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
                .then(res => res.json())
                .then(data => setCategories(data.categories))
        }
    }, []);

    return (
        <>
            <h1 className='text-center'>Search Recipe</h1>
            <div className='d-flex justify-content-center'>
                <input value={props.value} onChange={props.onChange} />
                <button style={{ marginLeft: '10px' }} onClick={props.search}>Search</button>
            </div>
            <h2>Categories</h2>
            {!categories ? <h2>Loading...</h2> : (
                <section className='row'>
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
            )}
        </>
    );
};