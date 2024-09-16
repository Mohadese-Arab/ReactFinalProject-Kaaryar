import { useParams } from "react-router-dom";
import { useState } from "react";

import data from "../../data.json";

import classes from "./product.module.scss";

import bannerImg from "../../assets/images/ad_banner.avif";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import ProductImage from "../../components/productImage";

const Product = () => {
  const productId = useParams();
  const [chosenStyle, setChosenStyle] = useState("R3 7320U");
  const [showMore, setShowMore] = useState(false);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  let product = [];
  let productDetailes = data.productStyle[0];
  let quantitiy = [];

  for (let i = 0; i < 28; i++) {
    quantitiy.push(i);
  }

  const productStyleArray = Object.entries(productDetailes);

  const visibleList = productStyleArray.slice(0, productStyleArray.length - 3);
  const hiddenList = productStyleArray.slice(productStyleArray.length - 3);

  const visibleAbout = data.aboutItems.slice(0, data.aboutItems.length - 3);
  const hiddenAbout = data.aboutItems.slice(data.aboutItems.length - 3);

  data.products.map((item) => {
    if (item.id == productId.id) {
      product.push(item);
    }
  });

  const chooseStyleHandler = (model) => {
    setChosenStyle(model);
  };

  const today = new Date();
  console.log(today);

  return (
    <div className={classes.container}>
      <div className={`${classes.adBanner}`}>
        <img src={bannerImg} alt="banner" />
      </div>
      <main className={classes.main}>
        <section className={classes.imageSection}>
          <ProductImage product={product} />
        </section>
        <section className={classes.productInfo}>
          <div className={classes.infoTop}>
            <h2>{product[0].title}</h2>
            <p>{product[0].desc}</p>
            <a href="#">Visit the {product[0].title} store</a>
            <div className="d-flex align-center gap-16">
              <p className="d-flex align-center">
                <span>{product[0].rate}</span>
                <FaStar className={classes.FaStar} />
                <FaStar className={classes.FaStar} />
                <FaStar className={classes.FaStar} />
                <FaStar className={classes.FaStar} />
                <FaStar className={classes.FaStar} />
              </p>
              <a href="#" className={classes.rate}>
                {product[0].ratePeople} ratings
              </a>
              <a href="#">Search this page</a>
            </div>
            <span>6K+ bought in past month</span>
          </div>
          <div className={classes.infoPrice}>
            <div className={`${classes.priceWrapper} d-flex`}>
              <p>-7%</p>
              <p className="d-flex">
                <span>$</span>
                {product[0].prev_price}
                <span>99</span>
              </p>
            </div>
            <p className={classes.listPrice}>
              List price: <span>${product[0].prev_price}</span>
            </p>
            <p>
              $91.31 Shipping & Import Fees Deposit to Iran{" "}
              <a href="#">Details</a>
              <IoIosArrowDown />
            </p>
            <p>
              Available at a lower price from
              <span>
                <a href="#"> other sellers </a>
              </span>
              that may not offer free Prime shipping.
            </p>
            <p>
              <span className={classes.tag}>Extra Savings</span> Amazon Music
              offer with this purchase 1 Applicable Promotion <IoIosArrowDown />
            </p>
          </div>
          <div className={classes.styleInfo}>
            <p>Style : {chosenStyle}</p>
            <div className={`${classes.chooseStyleBox} d-flex flex-column`}>
              <div className={`${classes.styleBtnWrapper} d-flex align-center`}>
                <div
                  className={`${classes.styleBtn} ${chosenStyle == 'R3 7320U' ? `${classes.active}` : ''}`}
                  onClick={() => chooseStyleHandler("R3 7320U")}
                >
                  <p>R3 7320U</p>
                  <span>$299.99</span>
                </div>
                <div
                  className={`${classes.styleBtn} ${chosenStyle == 'R7 5700U' ? `${classes.active}` :'' }`}
                  onClick={() => chooseStyleHandler("R7 5700U")}

                >
                  <p>R7 5700U</p>
                  <span>$499.99</span>
                </div>
              </div>

              <div className={`${classes.styleTitles}`}>
                <ul>
                  {visibleList.map(([key, value], index) => (
                    <li key={index}>
                      <span>{key}</span> <span>{value}</span>
                    </li>
                  ))}

                  {showMore &&
                    hiddenList.map(([key, value], index) => (
                      <li key={index}>
                        <span>{key}</span> <span>{value}</span>{" "}
                      </li>
                    ))}
                </ul>
                <p
                  className="d-flex align-center"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show Less" : "Show More"}
                  {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </p>
              </div>
            </div>
          </div>

          <div className={classes.aboutItems}>
            <ul>
              {visibleAbout.map((item) => (
                <li key={item.id}> {item.desc} </li>
              ))}

              {showMoreAbout &&
                hiddenAbout.map((item) => <li key={item.id}>{item.desc}</li>)}
            </ul>

            <p
              className="d-flex align-center"
              onClick={() => setShowMoreAbout(!showMoreAbout)}
            >
              {showMoreAbout ? "Show Less" : "Show More"}
              {showMoreAbout ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </p>
          </div>

          <p className={`${classes.report} d-flex align-center`}>
            <MdMessage className={classes.icon} />
            <a href="#">Report an issue with this product or seller</a>
          </p>

          <p className={classes.note}>
            <span>Note:</span> Products with electrical plugs are designed for
            use in the US. Outlets and voltage differ internationally and this
            product may require an adapter or converter for use in your
            destination. Please check compatibility before purchasing.
          </p>
        </section>
        <section className={classes.addToCart}>
          <div className={classes.container}>
            <p
              className={`${classes.header} d-flex align-center justify-between`}
            >
              Buy new:
              <span>
                <FaDotCircle className={classes.icon} />
              </span>
            </p>

            <p className={`${classes.price} d-flex align-start`}>
              <span>$</span>
              <span>{product[0].prev_price}</span>
              <span>99</span>
            </p>

            <p className={classes.note}>
              $91.31 Shipping & Import Fees Deposit to Iran Details Delivery
            </p>
            <p className={classes.date}>Wednesday, May 15</p>

            <p className={classes.deliver}>
              {" "}
              <GoLocation /> <a href="#">Deliver to Iran</a>{" "}
            </p>

            <div className={classes.inStockWrapper}>
              <p>In Stock</p>

              <select>
                {quantitiy.map((item) => (
                  <option value={item} key={item}>
                    Quantity : {item}
                  </option>
                ))}
              </select>
            </div>

            <button className={classes.addBtn}>Add to cart</button>

            <ul className={classes.shippingList}>
              <li className={``}>
                <span>Ships from</span>
                <p>Amazon.com</p>
              </li>
              <li className={``}>
                <span>Sold by</span>
                <p>Amazon.com</p>
              </li>
              <li className={``}>
                <span>Returns</span>
                <p>
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </p>
              </li>
              <li className={``}>
                <span>Payments</span>
                <p>Secure transaction</p>
              </li>
              {showShipping && <li>
                <span>Support</span>
                <p>Product support included</p>
              </li>}

              <li className={classes.showBtn} onClick={() => setShowShipping(!showShipping)}>
                {showShipping ? "Show Less" : "Show More"}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Product;
