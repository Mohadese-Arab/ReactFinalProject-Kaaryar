import Slider from "../../components/slider";
import HomeContent from "../../components/content";

import classes from "./home.module.scss"

const Home = () => {
  return <main className={classes.homeMain}>
    <Slider />
    <div className={classes.container}>
        <HomeContent />
    </div>
  </main>;
};

export default Home;
