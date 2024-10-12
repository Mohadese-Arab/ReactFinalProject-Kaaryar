import classes from "./chooseLng.module.scss";

import data from "../../data.json";

import flagImg from "../../assets/images/usaFlag.jpg";

const ChooseLng = ({setShowLngList}) => {
  return (
    <div
      className={classes.container}
      onMouseEnter={() => setShowLngList(true)}
      onMouseLeave={() => setShowLngList(false)}
    >
      <header className={`${classes.header} d-flex align-center`}>
        <p>Change language</p>
        <a href="#">Learn more</a>
      </header>

      <main className={classes.main}>
        <section>
          <ul className="d-flex flex-column">
            {data.languages.map((lng) => (
              <li key={lng.id} className="d-flex align-center">
                <input type="radio" id={`lng-${lng.id}`} name="lng" />
                <label htmlFor={`lng-${lng.id}`}>{lng.name}</label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className={`${classes.header} d-flex align-center`}>
            <p>Choose currency</p>
            <a href="#">Learn more</a>
          </div>

          <main
            className={`${classes.main} d-flex align-center justify-between`}
          >
            <p>$ - USD - US Dollar</p>
            <a href="#">Change</a>
          </main>
        </section>
      </main>

      <footer className={`${classes.footer} d-flex flex-column`}>
        <div className={`${classes.footerTop} d-flex align-center`}>
          <div>
            <img src={flagImg} alt="flag" />
          </div>{" "}
          <p>you are shopping on Amazon.com</p>
        </div>
        <a href="#">Change country / region</a>
      </footer>
    </div>
  );
};

export default ChooseLng;
