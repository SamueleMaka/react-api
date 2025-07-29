const SingleCard = ({name, birth_year, nationality, image, biography, awards}) => {
    return (
        <div className="cardContainer">
            <div className="imageContainer">
                <img src={image} alt={name} />
            </div>
            <div className="dataContainer">
                <h2>{name}, {birth_year}</h2>
                <h3>{nationality}</h3>
                <h3 className="awards">{awards}</h3>
            </div>
            <div className="biography">
                <p>{biography}</p>
            </div>
        </div>
    )
}

export default SingleCard