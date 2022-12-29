import { useEffect } from 'react';

export const Categories = (props) => {

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
            /* www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata */
            .then(res => res.json())
            .then(data => console.log('categories', data.meals))
    }, []);

    return (
        <>
            <div className='d-flex justify-content-center'>
                <input value={props.value} onChange={props.onChange} />
                <button onClick={props.search}>Search</button>
            </div>
            <h1>Categories</h1>
        </>
    );
};