/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("service_rutx54d", "template_6wo8zpn", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        alert("Message sent successfully!");
        // Reset form fields after successful submission
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert("Failed to send the message. Please try again later.");
        console.error("Failed...", error);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const workItems = document.querySelectorAll('.work__img');
    const contentArea = document.getElementById('content-area');
    let currentSection = ''; // Track the currently loaded section

    workItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const section = item.getAttribute('data-section');

            if (currentSection === section) {
                // If the same section is clicked again, hide the content
                toggleContent(false);
                currentSection = ''; // Reset the current section
            } else {
                // If a different section is clicked, load new content
                loadContent(section);
                currentSection = section; // Set the new current section
            }
        });
    });

    function loadContent(section) {
        let content = '';

        switch (section) {
            case 'work-experience':
                    content = `
                        <h3>Work Experience</h3>
                        <p style="text-align: left;">
                            <strong>Oracle:</strong><br>
                            In my capacity at Oracle, I assumed ownership of the Backend Systems for large-scale Ad-Tech Products within Oracle Advertising, focusing particularly on Analytics. My contributions encompassed extensive work with Python, JavaScript, Go-Lang, Docker, Kubernetes, AWS, OCI, and PostgreSQL. This experience allowed me to actively engage in the development and optimization of robust backend systems for Oracle's Advertising Analytics platform.
                        </p>
                        <br>
                        <p style="text-align: left;">
                            <strong>Phenom:</strong><br>
                            During my tenure at Phenom, I took ownership of critical components within the Candidate Profile Microservice, including user life cycle management, candidate location service, and the creation and enhancement of candidate profile merging/recreation logic. My responsibilities involved extensive work with Java, Microservices, Storm, Kafka, ELK, and MongoDB. This experience enriched my proficiency in these technologies and deepened my understanding of microservices architecture.
                        </p>
                        <br>
                        <p style="text-align: left;">
                            <strong>Vassar Labs:</strong><br>
                            In my role at Vassar Labs, I owned the APWRIMS project and led a team of 5 developers for over 5 months during my 2.10-year tenure. I handled full-stack development, from UI to API, core backend logic, and deployment. My work spanned HTML, CSS, Java, Angular, MySQL, Cassandra, Storm, and Kafka, providing me with invaluable experience and skill growth.
                        </p>`;
                    break;


            case 'projects':
                content = '<h3>Projects</h3><p>Details about my projects...</p>';
                break;
            // case 'blogs':
            //     content = '<h3>Blogs</h3><p>Links to my latest blogs...</p>';
            //     break;
            case 'research':
                content = '<h3>Research</h3><p>Information about my research...</p>';
                break;
            case 'education':
                content = '<h3>Education</h3><p>Details about my education...</p>';
                break;
            case 'certifications':
                content = '<h3>Certifications</h3><p>My certifications and credentials...</p>';
                break;
            default:
                content = '<p>Select a section to view details.</p>';
        }

        // Update content area
        contentArea.innerHTML = content;

        // Add active class for smooth transition
        toggleContent(true);
    }

    function toggleContent(show) {
        if (show) {
            contentArea.classList.add('active');
        } else {
            contentArea.classList.remove('active');
            contentArea.innerHTML = ''; // Clear content
        }
    }
});


