import { useNavigate } from 'react-router-dom';

export const RecipeItem = (props) => {

    const navigate = useNavigate();

    return (
        <article className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center'>
            <div className="card mt-4" key={props.key}>
                <img src={props.img} alt="Recipe" />
                <h3>{props.title}</h3>
                <div className='d-flex align-items-end' style={{ height: '100%' }}>
                    <button onClick={() => navigate(`/recipe/${props.navigateTo}`)}>See more</button>
                </div>
            </div>
        </article>
    );
};