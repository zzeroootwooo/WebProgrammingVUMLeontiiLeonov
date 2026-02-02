import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <NavLink to="/" className="brand" aria-label="NovaPets home">
                    <span className="brand-badge" aria-hidden="true">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 2l8.5 4.8v10.4L12 22l-8.5-4.8V6.8L12 2z"
                                stroke="white"
                                strokeWidth="1.8"
                                opacity="0.95"
                            />
                            <path
                                d="M7.4 8.8L12 6.2l4.6 2.6v6.4L12 17.8l-4.6-2.6V8.8z"
                                fill="white"
                                opacity="0.22"
                            />
                            <path
                                d="M9.2 12h5.6"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M12 9.2v5.6"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    <span>NovaPets</span>
                </NavLink>

                <nav className="nav" aria-label="Primary">
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                    <NavLink to="/about">How it works</NavLink>
                    <NavLink to="/pets">Pets</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                <div className="header-cta">
                    <NavLink to="/pets" className="btn">
                        Browse pets
                    </NavLink>
                    <NavLink to="/contact" className="btn primary">
                        Adoption help
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
