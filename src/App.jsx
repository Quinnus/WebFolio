import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
// import Contact from './contact/Contact.jsx'
import Navbar from './navbar/Navbar.jsx'
import Socialbar from "./socialbar/Socialbar.jsx";

function App() {

    return (
        <main>
            <Navbar/>
            <About id="aboutsection"/>
            <Projects id="projectssection"/>
            <Skills id="skillssection"/>
            <footer><Socialbar id="contactsection"/></footer>
        </main>


    )
}

export default App
