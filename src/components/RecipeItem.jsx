import { Link } from 'react-router-dom';

export const RecipeItem = (props) => {

    return (
        <article className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center'>
            <div className="card mt-4">
                <img src={props.img} alt="Recipe" />
                <h3>{props.title}</h3>
                <div className='d-flex align-items-end' style={{ height: '100%' }}>
                    <Link style={{ width: '100%' }} to={'/recipe/' + props.navigateTo}>
                        <button className='btn-see-more'>See more</button>
                    </Link>
                </div>
            </div>
        </article>
    );
};