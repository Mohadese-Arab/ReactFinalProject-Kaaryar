import { useState } from "react";
import data from "../../data.json";

import classes from "./burgerMenu.module.scss";

import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const BurgerMenu = ({ toggleBurgerMenu, setToggleBurgerMenu }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openSubMenu = () => {
    setIsOpen(true)
  }

  const closeBurgerMenu = () => {
    setToggleBurgerMenu(false)
    setIsOpen(false)
  }

  return (
    <>
      <div
        className={`${classes.mainMenu} ${
          toggleBurgerMenu ? `${classes.open}` : `${classes.closed}`
        }`}
      >
        <header className={`${classes.header} d-flex align-center`}>
          <FaCircleUser className={classes.userIcon} />{" "}
          <span>Hello, sign in</span>
        </header>

        <main className={`${classes.main} d-flex`}>
          <div>
            {Object.entries(data.menuList[0]).map((key) => (
              <section key={key[0]}>
                <p>{key[0]}</p>
                <ul key={key[0]}>
                  {key[1].map((item) => (
                    <li
                      key={item.id}
                      className="d-flex align-center justify-between"
                      onClick={item.id === 1 ? openSubMenu : null }
                    >
                      <span>{item.title}</span>
                      <IoIosArrowForward />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {<section
            className={`${classes.subMenu} ${
              isOpen ? `${classes.open}` : `${classes.closed}`
            }`}
          >
            <header className={`${classes.subHeader} d-flex align-center`} onClick={() => setIsOpen(false)}>
              <IoMdArrowRoundBack />
              <p>Main Menu</p>
            </header>

            <main className={classes.subMain}>
              <p>Stream Music</p>
              <ul>
                <li>Amazon Music Unlimited</li>
                <li>Free Streaming Music</li>
                <li>Podcasts</li>
                <li>Open Web Player</li>
                <li>Download The App</li>
              </ul>
            </main>
          </section>}
        </main>
      </div>

      {toggleBurgerMenu && (
        <div
          className={classes.backDrop}
          onClick={closeBurgerMenu}
        ></div>
      )}
    </>
  );
};

export default BurgerMenu;
