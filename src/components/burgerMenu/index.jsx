import { useEffect, useRef } from "react";
import data from "../../data.json";

import classes from "./burgerMenu.module.scss";

import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const BurgerMenu = ({ toggleBurgerMenu, setToggleBurgerMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleBurgerMenu(false)
      }
    };

    document.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler)
    }
  }, [menuRef]);

  return (
    <div
      className={`${classes.mainMenu} ${
        toggleBurgerMenu ? `${classes.open}` : `${classes.closed}`
      }`}
      ref={menuRef}
    >
      <header className={`${classes.header} d-flex align-center`}>
        <FaCircleUser className={classes.userIcon} />{" "}
        <span>Hello, sign in</span>
      </header>

      <main className={classes.main}>
        {Object.entries(data.menuList[0]).map((key) => (
          <section key={key[0]}>
            <p>{key[0]}</p>
            <ul key={key[0]}>
              {key[1].map((item) => (
                <li
                  key={item.id}
                  className="d-flex align-center justify-between"
                >
                  <span>{item.title}</span>
                  <IoIosArrowForward />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
};

export default BurgerMenu;
