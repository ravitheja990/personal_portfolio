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
                // Load new content if different section clicked
                loadContent(section);
                currentSection = section; // Update the current section
            }
        });
    });

    function loadContent(section) {
        let content = '';

        switch (section) {
            case 'work-experience':
                content = `
                    <h3 class="section-title">Work Experience</h3>
                    <div class="experience-container">

                        <div class="experience-item">
                            <h4>Software Engineer (Student Assistant II)</h4>
                            <span class="company-duration">University of California, Riverside</span><br>
                            <span class="company-duration">Jan 2024 - Present</span>
                            <div class="experience-content">
                                <p>At UCR, I am leading the development of <strong>CupCake</strong>, an innovative carbon cycle visualization tool. 
                                The project combines <strong>React</strong> on the front end and <strong>Python</strong> on the back end to create a seamless experience for 
                                researchers analyzing complex environmental data. This experience has allowed me to hone my skills in full-stack development 
                                while contributing to research efforts addressing climate change.</p>
                                <p>Additionally, I am spearheading the development of a <strong>Retrieval-Augmented Generation (RAG)</strong>-based chatbot model. 
                                This tool dynamically retrieves relevant scientific content, providing insightful responses in real time to assist researchers 
                                in their inquiries.</p>
                            </div>
                        </div>

                        <div class="experience-item">
                            <h4>Senior Software Engineer</h4>
                            <span class="company-duration">Oracle, Hyderabad, India</span><br>
                            <span class="company-duration">Jan 2022 - Sep 2023</span>
                            <div class="experience-content">
                                <p>At Oracle, I owned backend systems for large-scale ad-tech products as part of Oracle Advertising. My focus was on the 
                                development and optimization of analytics platforms using technologies such as <strong>Python, JavaScript, GoLang, Docker, 
                                Kubernetes, AWS</strong>, and <strong>OCI</strong>. This work allowed me to engage deeply in backend engineering, improving both 
                                the performance and scalability of key systems.</p>
                                <p>I led the migration from monolithic systems to containerized microservices, achieving a <strong>70% improvement in operational 
                                efficiency</strong> and reducing vulnerabilities by 50%. A key initiative I drove was the creation of the <strong>VpaidWrapper</strong> tool, 
                                which processed over <strong>500 million ad pixels weekly</strong> across OCI and AWS, streamlining ad-tracking integration.</p>
                                <p>To further enhance platform reliability, I developed a real-time monitoring solution using <strong>Prometheus</strong> and 
                                <strong>Grafana</strong>, reducing downtime by 30% and enabling instant notifications through Slack, which improved response time by 70%.</p>
                            </div>
                        </div>

                        <div class="experience-item">
                            <h4>Product Development Engineer II</h4>
                            <span class="company-duration">Phenom, Hyderabad, India</span><br>
                            <span class="company-duration">Feb 2020 - Dec 2021</span>
                            <div class="experience-content">
                                <p>At Phenom, I took ownership of key modules within the candidate profile microservice, which managed user lifecycle events, 
                                candidate location services, and profile merging logic. This role involved hands-on experience with <strong>Java, Kafka, ELK,</strong> 
                                and <strong>MongoDB</strong>, along with microservice architecture development.</p>
                                <p>I built real-time data processing pipelines, reducing processing times by 40%, and implemented a multi-threaded algorithm that 
                                improved CRM location accuracy by 60% for over 2 million profiles. My efforts increased data integrity by 35% and freed up 90% of 
                                developer bandwidth by automating the correction of incorrectly merged profiles.</p>
                            </div>
                        </div>

                        <div class="experience-item">
                            <h4>Software Engineer</h4>
                            <span class="company-duration">Vassar Labs, Hyderabad, India</span><br>
                            <span class="company-duration">May 2017 - Feb 2020</span>
                            <div class="experience-content">
                                <p>In my role at Vassar Labs, I led the development of large-scale government projects, including the <strong>APWRIMS</strong> project, 
                                which optimized water resource allocation across Andhra Pradesh. Over my tenure, I worked on all aspects of the stack, from UI with 
                                <strong>Angular</strong> to backend APIs using <strong>Java</strong> and <strong>Cassandra</strong>.</p>
                                <p>I spearheaded the creation of a state-level SCADA system that improved real-time water tracking by 20% and developed an 
                                automated reporting system, saving over 10 hours of manual work each month. Additionally, I designed unified APIs to integrate 
                                data from 10+ government sectors, enhancing operational efficiency and transparency.</p>
                            </div>
                        </div>

                    </div>`;
                break;




            case 'projects':
                content = `<h3>Projects</h3><p>Details about my projects coming soon...</p>`;
                break;

            case 'research':
                content = `<h3>Research</h3><p>Information about my research coming soon...</p>`;
                break;

            case 'education':
                content = `
                    <h3>Education</h3>
                    <p>MS in Computer Science & Engineering - University of California, Riverside</p>
                    <p>BTech in Computer Science & Engineering - Jawaharlal Nehru Technological University, Hyderabad</p>`;
                break;

            case 'certifications':
                content = `
                    <h3>Certifications</h3>
                    <div class="certifications__container">
                        <div class="certification-item">
                            <embed src="assets/files/certificates/AI_Powered_Engineer.pdf" type="application/pdf" width="100%" height="400px" />
                            <a href="assets/files/certificates/AI_Powered_Engineer.pdf" target="_blank" download class="btn-download">Download Certificate</a>
                        </div>
                        <div class="certification-item">
                            <embed src="assets/files/certificates/Apache_Storm.pdf" type="application/pdf" width="100%" height="400px" />
                            <a href="assets/files/certificates/Apache_Storm.pdf" target="_blank" download class="btn-download">Download Certificate</a>
                        </div>
                        <div class="certification-item">
                            <embed src="assets/files/certificates/Arcade_Game.pdf" type="application/pdf" width="100%" height="400px" />
                            <a href="assets/files/certificates/Arcade_Game.pdf" target="_blank" download class="btn-download">Download Certificate</a>
                        </div>
                        <div class="certification-item">
                            <embed src="assets/files/certificates/Pragmatic_System_Design.pdf" type="application/pdf" width="100%" height="400px" />
                            <a href="assets/files/certificates/Pragmatic_System_Design.pdf" target="_blank" download class="btn-download">Download Certificate</a>
                        </div>
                        <div class="certification-item">
                            <embed src="assets/files/certificates/Programming_Games.pdf" type="application/pdf" width="100%" height="400px" />
                            <a href="assets/files/certificates/Programming_Games.pdf" target="_blank" download class="btn-download">Download Certificate</a>
                        </div>
                        <div class="certification-item">
                            <embed src="assets/files/certificates/Redis.pdf" type="application/pdf" width="100%" height="400px" />
                            <a href="assets/files/certificates/Redis.pdf" target="_blank" download class="btn-download">Download Certificate</a>
                        </div>
                    </div>`;
                break;

            default:
                content = `<p>Select a section to view details.</p>`;
        }

        // Update the content area with new content
        contentArea.innerHTML = content;

        // Smoothly reveal the content
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
