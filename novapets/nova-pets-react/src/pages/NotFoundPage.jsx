import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <section className="section">
            <div className="container split">
                <div className="panel">
                    <div className="kicker">
                        <span className="kicker-dot"></span> 404
                    </div>
                    <h1>We could not find that page.</h1>
                    <p className="lead">
                        The link may be broken, or the page may have moved.
                    </p>
                    <div className="hero-actions">
                        <NavLink className="btn primary" to="/">
                            Back to home
                        </NavLink>
                        <NavLink className="btn" to="/pets">
                            Browse pets
                        </NavLink>
                    </div>
                </div>
                <div className="panel">
                    <h2>Need help?</h2>
                    <p>
                        If you were looking for adoption support, reach out and
                        we will guide you to the right place.
                    </p>
                    <NavLink className="btn" to="/contact">
                        Contact us
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
