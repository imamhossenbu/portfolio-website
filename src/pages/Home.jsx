
import Banner from "../components/Banner";
import Education from "../components/Education";
import Project from "../components/Project";
import Skills from "../components/Skills";
import About from "./About";
import Contact from "./Contact";



const Home = () => {
    return (
        <div className="pt-20">
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Project></Project>
            <Contact></Contact>

        </div>
    );
};

export default Home;