const Card = ({ name, cuisine, image, link }) => (
  <div className="card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{cuisine}</p>
    <a href={link} target="_blank" rel="noreferrer">
      <button className="menu-button">View Menu</button>
    </a>
  </div>
);

export default Card;
