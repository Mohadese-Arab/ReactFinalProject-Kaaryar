import classes from "./cart.module.scss";
import img from "../../assets/images/image.avif";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Cart = ({ data }) => {
  const [cartProducts, setCartProducts] = useState([])
  let quantitiy = [];

  for (let i = 1; i < 29; i++) {
    quantitiy.push(i);
  }

  useEffect(() => {
    setCartProducts(data.cartProducts)
  }, [cartProducts])

  const deleteAllHandler = () => {
    data.cartProducts.splice(0, data.cartProducts.length)
    setCartProducts([])
  }

  return (
    <>
      {cartProducts.length > 0 ? (
        <div className={classes.container}>
          <section className={classes.product}>
            <div className={classes.header}>
              <h2>Shopping Basket</h2>
              <p onClick={deleteAllHandler}>Deselect all items</p>
            </div>

            {cartProducts.map((item) => (
              <>
                <div className={classes.content}>
                  <div className={classes.imageWrapper}>
                    <img src={item.img_url} alt="" />
                  </div>
                  <div className={classes.desc}>
                    <p>{item.desc}</p>
                    <p className={classes.stock}>In Stock</p>
                    <div className={classes.primeImage}>
                      <img src={img} alt="" />
                    </div>

                    <div
                      className={`${classes.giftOption} d-flex align-center`}
                    >
                      <input type="checkbox" id="gift" />
                      <label htmlFor="gift">
                        This will be a gift <a href="#">Learn more</a>
                      </label>
                    </div>

                    <div className={classes.style}>
                      <div>
                        <span className={classes.title}>Style: </span>
                        <span className={classes.value}>
                          0.5 litre work container
                        </span>
                      </div>

                      <div>
                        <span className={classes.title}>Colour Name: </span>
                        <span className={classes.value}>White</span>
                      </div>
                    </div>

                    <div className={classes.inStockWrapper}>
                      <select>
                        {quantitiy.map((item) => (
                          <option value={item} key={item}>
                            Quantity : {item}
                          </option>
                        ))}
                      </select>

                      <span>Delete</span>
                      <span>Save for later</span>
                      <span>See more like this</span>
                      <span>Share</span>
                    </div>
                  </div>

                  <div className={classes.price}>
                    <p>${item.prev_price}</p>
                  </div>
                </div>
              </>
            ))}
            <div className={`${classes.footer} d-flex justify-end`}>
              <p>
                Subtotal(1 item): <span>$1200</span>{" "}
              </p>
            </div>
          </section>
          <section className={classes.checkoutProceed}>
            <h2>Subtotal(1 item)</h2>
            <p>$100</p>
            <div className={`${classes.giftOption} d-flex align-center`}>
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">
                This will be a gift <a href="#">Learn more</a>
              </label>
            </div>

            <button>Proceed to checkout</button>
          </section>
        </div>
      ) : (
        <div className={`${classes.emptyBasket} d-flex flex-column justify-center`}>
          <h2>Your Amazon Basket is empty.</h2>
          <p>Check products page for shopping. <Link to={"/"}>continue shopping</Link></p>
        </div>
      )}
    </>
  );
};

export default Cart;
