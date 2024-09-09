import classes from "./footer.module.scss";

import logoImg from "../../assets/images/amazon-logo.avif";
import usaFlag from "../../assets/images/usaFlag.jpg";
import { BsGlobe2 } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";

import data from "../../data.json";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div
        className={`${classes.backToTopBtn} d-flex align-center justify-center`}
      >
        <p>Back to top</p>
      </div>

      <div className={classes.footerContent}>
        {Object.entries(data.footer_data[0]).map((key) => (
          <ul key={key[0]} className="d-flex flex-column ">
            <p>{key[0]}</p>
            {key[1].map((item) => (
              <li key={item.id}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div
        className={`${classes.footerBottom} d-flex align-center justify-center`}
      >
        <div className={classes.logo}>
          <a href="#">
            <img src={logoImg} alt="logo" />
          </a>
        </div>
        <div
          className={`${classes.infoWrapper} d-flex align-center justify-center`}
        >
          <div
            className={`${classes.infoItem} d-flex align-center justify-center`}
          >
            <BsGlobe2 /> <span>English</span>
          </div>

          <div
            className={`${classes.currency} ${classes.infoItem} d-flex align-center justify-center`}
          >
            <TbCurrencyDollar className={classes.currencyIcon} />
            <span> USD - U.s Dollor</span>
          </div>
          <div
            className={`${classes.country} ${classes.infoItem} d-flex align-center justify-center`}
          >
            <div className={`${classes.usaFlag}`}>
              <img src={usaFlag} alt="flag" />
            </div>
            <span> United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
