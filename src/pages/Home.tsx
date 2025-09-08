import NavBar from "../components/Navbar/NavBar";
import About from "./About/About";
import Advantages from "./Advantages/Advantages";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Video from "./Video/Video";

function Home() {
    return (
        <main className='bg-[var(--current-bg-color)]'>

            <NavBar></NavBar>
            <Video></Video>
            <Advantages></Advantages>
            <Services></Services>
            <Faq></Faq>
            <About></About>
            <Footer></Footer>

        </main>
    )
}

export default Home;