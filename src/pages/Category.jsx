import { useParams } from 'react-router-dom';

export const Category = () => {

    const receipe = useParams().category;

    return (
        <h1>Category: {receipe}</h1>
    );
};