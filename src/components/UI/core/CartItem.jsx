import { UseFood } from "../../../Context/FoodContext";
import Button from "../Button";
function CartItem({ item,index }) {
  const { name, price, description, image } = item;
  const { getInfoCart,currencySign } = UseFood();
  const handleClick = (e) => {
    e.preventDefault();
    getInfoCart(name, price, index);
  };

  return (
    <div className={`col-xl-4 col-sm-6 col-12 mb-25 justify-content-sm-center`}>
      <form action="">
        <div className="card pt-20 pb-20 pl-10 pr-10 foodLayout__card d-flex flex-row align-items-center">
          <div>
            <img className="boradius-10" src={image} alt="" />
          </div>
          <div className="foodLayout__card--content pl-25">
            <h2 className={`size-18 weight-700`}>{name}</h2>
            <h3 className={`size-15 weight-500`}>{description}</h3>
            <h4 className={`size-20 weight-600`}>{currencySign} {price }</h4>
            <Button
              type="submit"
              className={"addToCartBtn mt-10"}
              disabled={false}
              onClick={(e) => handleClick(e)}
            >
              {"Add to Cart"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CartItem;
