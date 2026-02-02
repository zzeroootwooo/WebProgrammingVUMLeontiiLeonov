import { NavLink } from "react-router-dom";

const ContactPage = () => {
    return (
        <>
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-card">
                        <div className="kicker">
                            <span className="kicker-dot"></span> Contact
                        </div>
                        <h1>We’re here to help you adopt.</h1>
                        <p>
                            Tell us what you’re looking for (energy level,
                            apartment/house, kids/other pets), and we’ll suggest
                            great matches. If you already picked a pet, share
                            the name and we’ll connect you.
                        </p>
                        <div className="hero-actions">
                            <NavLink className="btn" to="/pets">
                                Browse pets
                            </NavLink>
                            <NavLink className="btn primary" to="/about">
                                How it works
                            </NavLink>
                        </div>
                    </div>

                    <div className="panel">
                        <h2>Office</h2>
                        <p className="lead">Sofia, Bulgaria</p>
                        <ul className="list">
                            <li>
                                <span>☎</span> +359 000 000 000
                            </li>
                            <li>
                                <span>✉</span> hello@novapets.example
                            </li>
                            <li>
                                <span>⏱</span> Mon–Fri 09:00–18:00
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container split">
                    <div className="panel">
                        <h2>Contact form</h2>
                        <form className="form">
                            <div className="field">
                                <label for="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="field">
                                <label for="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="field">
                                <label for="topic">Topic</label>
                                <input
                                    id="topic"
                                    name="topic"
                                    placeholder="Recommendation / Adoption / Question"
                                />
                            </div>
                            <div className="field">
                                <label for="msg">Message</label>
                                <textarea
                                    id="msg"
                                    name="msg"
                                    placeholder="Tell us about your lifestyle (time at home, activity, other pets)..."
                                ></textarea>
                            </div>
                            <div className="hero-actions">
                                <button className="btn primary" type="button">
                                    Send message
                                </button>
                                <button className="btn danger" type="reset">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="panel">
                        <h2>Quick answers</h2>
                        <p className="lead">
                            The most common questions we get.
                        </p>
                        <ul className="list">
                            <li>
                                <span>?</span> Can I visit first? <em>Yes</em>,
                                we’ll schedule with the shelter.
                            </li>
                            <li>
                                <span>?</span> Do you deliver pets? <em>No</em>,
                                pickup only for safety.
                            </li>
                            <li>
                                <span>?</span> How long does it take? Often{" "}
                                <em>2–7 days</em> depending on the shelter.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
