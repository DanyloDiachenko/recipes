import { useNavigate } from 'react-router-dom';

export const CategoryItem = (props) => {

    const navigate = useNavigate();

    return (
        <article className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center'>
            <div className="card mt-4" key={props.key}>
                <img src={props.img} alt="Recipe" />
                <h2>{props.title}</h2>
                <p>{props.description.slice(0, 150)}...</p>
                <div className='d-flex align-items-end' style={{height: '100%'}}>
                    <button onClick={() => navigate(`/categories/${props.navigateTo}`)}>See more</button>
                </div>
            </div>
        </article>
    );
};