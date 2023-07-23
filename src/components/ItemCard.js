const ItemCard = ({ item }) => {
  const handleImageError = (event) => {
    event.target.src = "/images/error.gif"; 
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} onError={handleImageError} />
      <p>{item.description}</p>
    </div>
  );
};

export default ItemCard;
