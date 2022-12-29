import { useParams } from 'react-router-dom';

export const Recipe = () => {

    const recipe = useParams().recipe;

    return (
        <h1>Recipe: {recipe}</h1>
    );
};