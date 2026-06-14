import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx';
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import BackgroundCanvas from "./components/BackgroundCanvas.jsx";

function App() {

    return (
        <>
            <BackgroundCanvas/>
            <CustomCursor/>
            <main>
                <Header/>
                <Hero/>
                <About/>
                <Projects/>
                <Skills/>
                <Contact/>
                <Footer/>
            </main>
        </>
    )
}

export default App
