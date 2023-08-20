// * import components (default)
import About from "./page/About"
import Contact from "./page/Contact"
import Education from "./page/Education"
import Profile from "./page/Profile"
import { BtnToTop as Btn } from "./layout/BtnToTop"

const Home = ({ PropHome }) => {
  return (
      <section className="home">
        <About PropAbout={PropHome} />
        <Profile PropProfile={PropHome} />
        <Education PropEducation={PropHome} />
        <Contact PropContact={PropHome} />
        <Btn/>
      </section>
  )
};

export default Home;
