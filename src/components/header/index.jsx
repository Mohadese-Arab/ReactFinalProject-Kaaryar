import data from "../../data.json";

import logoImg from "../../assets/images/amazon-logo.avif";
import flagImg from "../../assets/images/usaFlag.jpg";
import cartIcon from "../../assets/images/cart-icon.avif";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import classes from "./header.module.scss";
import { useState } from "react";

const Header = () => {
  const { searchCategories } = data;

  const [shopCount, setShopCount] = useState(0);

  return (
    <>
      <header className={`${classes.header} d-flex align-center`}>
        <div className="logoWraaper">
          <img src={logoImg} width="115" alt="logo" />
        </div>

        <div className={`${classes.deliverInfoBox} d-flex align-end`}>
          <HiOutlineLocationMarker />
          <div
            className={`${classes.deliverInfo} d-flex align-center justify-center flex-column`}
          >
            <span>Deliver to</span>
            <p>Iran</p>
          </div>
        </div>

        <div className={`${classes.searchBox}`}>
          <form>
            <select
              className={`${classes.searchSelect} d-flex align-center justify-center`}
            >
              {searchCategories.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Search Amazon" />
            <button className={`d-flex align-center justify-center`}>
              <FaSearch className={classes.searchIcon} />
            </button>
          </form>
        </div>

        <div
          className={`${classes.selectLngBox} d-flex align-center justify-center`}
        >
          <div className={`${classes.flagWrapper}`}>
            <img src={flagImg} alt="usa-flag" />
          </div>
          <div className={`${classes.selectLng} d-flex align-center`}>
            <span>EN</span>
            <IoMdArrowDropdown />
          </div>
        </div>

        <div className={`${classes.accountListsBox}`}>
          <span>Hello, sign in</span>
          <div className={`${classes.dropDownBtn} d-flex align-center`}>
            <p>Account & Lists</p>
          </div>
        </div>

        <div className={`${classes.returnOrderBox}`}>
          <span>returns</span>
          <div className="d-flex align-center">
            <p>& Orders</p>
            <IoMdArrowDropdown />
          </div>
        </div>

        <div className={`${classes.cartBox} d-flex`}>
          <div className={`${classes.cartIconWrapper}`}>
            <span>{shopCount}</span>
            <img src={cartIcon} alt="cartIcon" />
          </div>
          <p>Cart</p>
        </div>
      </header>
      <nav>
        <ul className="d-flex align-center">
          {data.navList.map((item) => (
            <li key={item.id} className="d-flex align-center">
              {item.id === 1 ? <GiHamburgerMenu /> : null}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
