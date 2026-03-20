import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx';

function App() {

    return (
        <main>
            <Header/>
            <About id="aboutsection"/>
            <Projects id="projectssection"/>
            <Skills id="skillssection"/>
            <footer><Footer id="contactsection"/></footer>
        </main>


    )
}

export default App
