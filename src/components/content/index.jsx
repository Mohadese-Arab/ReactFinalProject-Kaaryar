import { Link } from "react-router-dom";
import data from "../../data.json";

import classes from "./homeContent.module.scss";

import { FaStar } from "react-icons/fa";

const HomeContent = () => {
  return (
    <>
      <header
        className={`${classes.header} d-flex align-center justify-center`}
      >
        <p>
          You are on amazon.com. You can also shop on Amazon Iran for millions
          of products with fast local delivery. Click here to go to{" "}
          <a href="#">amazon.de</a>
        </p>
      </header>
      <main className={classes.main}>
        {data.products.map((product, i) => (
          <section key={i} className="d-flex justify-center flex-column">
            <div
              className={`${classes.imageWrapper} d-flex align-center justify-center`}
            >
              <img src={product.img_url} alt={`image${i}`} />
            </div>
            <div className={classes.productDescBox}>
              <p className={classes.title}>{product.title}</p>
              <div className={`${classes.priceBox}`}>
                <div className={`${classes.newPrice} d-flex align-center`}>
                  <span>$</span>
                  <span className={classes.price}>{product.price}</span>
                  <span>{product.added_price}</span>
                </div>
                <p className={classes.oldPrice}>${product.prev_price}</p>
              </div>
              <div className={classes.productDescBox}>
                <p>{product.desc}</p>
              </div>
              <div className={`${classes.rateBox} d-flex align-center`}>
                <FaStar className={classes.starIcon} />
                <FaStar className={classes.starIcon} />
                <FaStar className={classes.starIcon} />
                <FaStar className={classes.starIcon} />
                <FaStar className={classes.starIcon} />
                <span>{product.rate}</span>
              </div>
              <Link to={`/product/${product.id}`}>See More ...</Link>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default HomeContent;
