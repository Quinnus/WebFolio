import profilePic from '../assets/me2.png'
import './About.css'


export default function About() {

    return (

        <section id="aboutsection">
            <div className="container">
                <h1>A bit about me</h1>

                <div className="about-me">
                    <div className="profile-image">
                        <img id="selfie-img" src={profilePic} alt="greyscale picture of John"/>
                    </div>
                    <div className="profile-text">
                        <div className="intro-me">
                            <p className="taglinetext">I used to have a corporate job. Now I do web and software
                                development.</p>

                        </div>
                        <div className="pic-mobile">
                            <img id="selfie-small" src={profilePic} alt="greyscale picture of John"/>
                        </div>
                        <p> Hey, thanks for stopping by. I'm a full-stack* software developer based in Dublin.
                            After 20 years in the multinational world, I decided to take a different path.
                            I’ve always loved the tech side of things, so now I’m focused on bridging the gap between
                            building great software and actually understanding the commercial 'why' behind it.
                            Whether it's navigating the chaos of M&A integration/separation or just making sure a
                            project stays
                            on track, I like being the person who can talk to both the dev team and the business
                            stakeholders without anything getting lost in translation.
                        </p><br/>
                        <p className="taglinetext">*that means the fancy bit (web-pages) and the techy bit (behind the
                            scenes)</p>
                    </div>
                </div>
            </div>
        </section>


    )
}