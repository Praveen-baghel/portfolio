import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Projects..</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            {/* <a href="https://github.com/cybergaz/Hyprland_Rice" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a> */}
          </div>
          </header>
          <div className="body">
            <h3>Hyprland_Rice</h3>
            <p> It's my personal Linux Desktop Environment setup that i update over time depending on my usage. it is based on Arch Linux and uses hyprland as the window manager. 
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>ArchLinux</li>
              <li>Shell</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://github.com/cybergaz/scripts/tree/main/wofi-emoji" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Guess What?</h3>
              <p> A flutter based multiplayer game that allows multiple users to make seperate rooms using Socket Programming and play a draw and guess game.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
                <li>MongoDb</li>
                <li>NodeJS</li>
                <li>SocketIO</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://github.com/cybergaz/Kaoi" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Smart Water Management</h3>
              <p> An IoT based project implementing water system in industries using Iot,cloud and automation.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Embedded C</li>
                <li>Thingworx</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://github.com/cybergaz/heavens_anime" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Smart Electric Vehicle</h3>
              <p>An IoT based project implementing Modern Electric Vehicle in industries using IoT,cloud, geofencing etc.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Embedded C</li>
                <li>Thingworx</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://github.com/cybergaz/To_Do_List" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Smart Genset</h3>
              <p>An IoT based project implementing Generator System in industries using Iot,cloud and automation. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Embedded C</li>
                <li>Thingworx</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/cybergaz/test_repo" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
              <a href="http://cybergaz.herokuapp.com" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Neet Coderz</h3>
              <p>Just a simple webpage i built during my first year . just a nostalgic reminder for me : &#41;
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}



      </div>
    </Container>
  );
}