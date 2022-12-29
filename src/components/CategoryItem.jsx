export const CategoryItem = (props) => {
    return (
        <article className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center'>
            <div className="card mt-4" key={props.key}>
                <img src={props.img} alt="Recipe" />
                <h2>{props.title}</h2>
                <p>{props.description.slice(0, 150)}...</p>
                <div className='d-flex align-items-end' style={{height: '100%'}}>
                    <button>See more</button>
                </div>
            </div>
        </article>
    );
};