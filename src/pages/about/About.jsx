import './about.css'
import myImage from './../../assets/myPhoto.jpeg'
import AboutComponentTech from '../../components/component_for_about_page/AboutComponentTech';
function About(){
    return(
        <>
        <section className="about-section">
            <div className="about-text-container">
                <p className="about-small-heading">SYSTEM_INIT / ABOUT</p>
                <h1 className='about-main-heading'>Engineering scalable <span>experiences</span> with precision.</h1>
                <p className="about-description"> Based in the digital ether, I am a Full-Stack Engineer specializing in the MERN ecosystem. My approach combines the structural integrity of robust backend architecture with the fluid responsiveness of modern frontend frameworks. I don't just write code; I architect solutions that scale. </p>
                <div className="tech-used-container">

                <AboutComponentTech items ={{nameOfRole : "DATABASE" , roleFlavor :"MongoDB"}}/>
                <AboutComponentTech items ={{nameOfRole : "RUNTIME" , roleFlavor :"Node.js/Express"}}/>
                </div>
                

            </div>
            <div className="about-image-container">
                <img src={myImage} alt="" />
            </div>
        </section>
        </>
    )
}

export default About;