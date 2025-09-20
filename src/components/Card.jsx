function Card({ image, title, location }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Card;
