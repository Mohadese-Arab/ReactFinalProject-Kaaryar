import classes from "./footer.module.scss"

import logoImg from "../../assets/images/amazon-logo.avif"

import data from "../../data.json"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.backToTopBtn} d-flex align-center justify-center`}>
        <p>Back to top</p>
      </div>

      <div className={classes.footerContent}>
        {Object.entries(data.footer_data[0]).map((key) => (
            <ul key={key[0]} className="d-flex flex-column ">
                <p>{key[0]}</p>
                {key[1].map((item) => (
                    <li key={item.id}><a href="#">{item.title}</a></li>
                ))}
            </ul>
        ))}
      </div>

      <div className={classes.footerBottom}>
        <div className={classes.logo}>
            <img src={logoImg} alt="logo" />
        </div>
        <div className={classes.infoWrapper}>
            <div className={classes.lng}>
                
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
