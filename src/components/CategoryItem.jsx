import { useNavigate } from "react-router-dom";

export const CategoryItem = (props) => {
    const navigate = useNavigate();

    return (
        <article className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card mt-4">
                <img
                    src={props.img}
                    alt="Recipe"
                    loading="lazy"
                />
                <h3>{props.title}</h3>
                <p className="mt-2">{props.description.slice(0, 150)}...</p>
                <div className="d-flex align-items-end mt-2" style={{ height: "100%" }}>
                    <button
                        className="btn-see-more"
                        onClick={() => navigate("/category/" + props.navigateTo)}>
                        See more
                    </button>
                </div>
            </div>
        </article>
    );
};