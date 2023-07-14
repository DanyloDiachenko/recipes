import { Link } from "react-router-dom";

export const CategoryItem = (props) => {
    return (
        <article className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card mt-4">
                <img
                    width={262}
                    height={262}
                    src={props.img}
                    alt="Recipe"
                    loading="lazy"
                />
                <h3>{props.title}</h3>
                <p className="mt-2">{props.description.slice(0, 150)}...</p>
                <div className="d-flex align-items-end mt-2" style={{ height: "100%" }}>
                    <Link
                        style={{ width: "100%" }}
                        to={"/category/" + props.navigateTo}
                    >
                        <button className="btn-see-more">See more</button>
                    </Link>
                </div>
            </div>
        </article>
    );
};