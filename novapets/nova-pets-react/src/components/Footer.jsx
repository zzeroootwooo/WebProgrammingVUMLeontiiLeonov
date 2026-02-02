import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div>
                    <strong>NovaPets</strong>
                    <br />
                    <span>
                        Adoption support, shelter partners, and happy endings.
                    </span>
                </div>

                <div className="footer-links" aria-label="Footer links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">How it works</NavLink>
                    <NavLink to="/pets">Pets</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>

                <div>
                    <span>© 2026 NovaPets</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
