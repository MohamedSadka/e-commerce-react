import { useWishList } from "../context/WishListContext";

const Wishlist = () => {
  const { wishListItems } = useWishList();

  return (
    <div>
      <h1>Wishlist content</h1>
      <ul>
        {wishListItems &&
          wishListItems.map((item) => (
              <li key={item.id}>{item.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default Wishlist;
