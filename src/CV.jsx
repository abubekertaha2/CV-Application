import './CV.css';
import githubImage from './assets/1298743_github_git_logo_social_icon.png';
import phoneImage from './assets/5932589_call_doctor_hospital_icon.png';
import gmailImage from './assets/7089163_gmail_google_icon.png';
import abukiImage from './assets/Abuki.jpg';
function Cv () {
    return (
        <div className="cv-container">
            <header className="cv-header">
                <h1>Abubeker Taha</h1>
                <img src={abukiImage} className='abuki'></img>
                <div className='img'>
                    <img src={gmailImage}></img>
                    <p><a href="">abubekertaha3@gmail.com</a></p>
                </div>
                <div className='img'>
                    <img src={phoneImage} alt="Phone Icon" />
                    <p>(+251) 968-31-8913</p>
                </div>
                <div className='img'>
                    <img src={githubImage} alt="GitHub Icon" />
                    <p><a href="https://github.com/abubekertaha2">github.com/abubekertaha2</a></p>
                </div>
            </header>
            <section className="cv-section">
                <h2>Profile</h2>
                <p>
                Driven Electrical and Computer
                Engineering student with a strong
                passion for front-end web
                development. I possess a solid
                foundation in programming,
                computer architecture. Eager to
                leverage my technical expertise and
                problem-solving skills to create
                intuitive, responsive, and visually
                appealing web applications that
                enhance user experience. Committed
                to continuous learning and
                professional growth, I aim to
                contribute to your institute network
                as developer.
                Core Competencies

                </p>
            </section>
            <section className="cv-section">
                <h2>Education</h2>
                <ul>
                    <li><b>Bachelor of Science in Electrical
                        Engineering</b><br/> Addis Ababa
                        University Institute of Technology
                    </li>
                </ul>
            </section>
            <section className="cv-section">
                <h2>Experience</h2>
                <ul>
                    <li><b>Web Developement Intern</b> <br/>
                        <i>Info Tech Company, Remote</i> September 2024
                    </li>
                    <li><b>Server-Side Development Intern</b><br/>
                    <i>Ethiopian Corporation Bank,</i> </li>
                </ul>
            </section>
            <section className="cv-section">
                <h2>Skills</h2>
                <ul>
                    <li>Python</li>
                    <li>Java Script</li>
                    <li>HTML and CSS</li>
                </ul>
            </section>
        </div>
    );
};

export default Cv;