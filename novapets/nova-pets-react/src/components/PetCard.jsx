const PetCard = ({ type, name, description }) => {
    return (
        <article className="card">
            <span className="badge">{type}</span>
            <h3>{name}</h3>
            <p>{description}</p>
        </article>
    );
};

export default PetCard;
