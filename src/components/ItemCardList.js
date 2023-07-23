import ItemCard from "./ItemCard";

const ItemCardList = ({ items }) => {
  return (
    <div className="item-card-list">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};
export default ItemCardList;
