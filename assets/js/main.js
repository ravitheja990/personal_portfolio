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
                            <span class="company-duration">University of California, Riverside | Jan 2024 - Present</span>
                            <br>
                            <ul class="experience-details">
                                <li>Leading the development of <strong>CupCake</strong>, a full-stack web application for visualizing carbon cycle models using <strong>React</strong> and <strong>Python</strong>.</li>
                                <li>Building a <strong>Retrieval-Augmented Generation (RAG)</strong>-based chatbot to assist researchers by dynamically retrieving and presenting relevant scientific data.</li>
                            </ul>
                        </div>
                        <div class="experience-item">
                            <h4>Senior Software Engineer</h4>
                            <span class="company-duration">Oracle, Hyderabad, India | Jan 2022 - Sep 2023</span>
                            <br>
                            <ul class="experience-details">
                                <li>Led the transition from monolithic architecture to microservices using <strong>Docker, Kubernetes, ArgoCD, AWS</strong>, and <strong>OCI</strong>, boosting efficiency by 70% and reducing vulnerabilities by 50%.</li>
                                <li>Developed scalable ad-tech solutions, increasing system efficiency by 40%, and implemented a monitoring system with <strong>Prometheus</strong> and <strong>Grafana</strong> that reduced downtime by 30%.</li>
                                <li>Conceptualized and implemented the <strong>VpaidWrapper</strong> tool, processing over 500 million ad pixels weekly, optimizing ad-tracking across OCI and AWS.</li>
                            </ul>
                        </div>
                        <div class="experience-item">
                            <h4>Product Development Engineer II</h4>
                            <span class="company-duration">Phenom, Hyderabad, India | Feb 2020 - Dec 2021</span>
                            <br>
                            <ul class="experience-details">
                                <li>Designed real-time data pipelines with <strong>Kafka</strong> and <strong>Java</strong>, reducing processing time by 40%.</li>
                                <li>Implemented a multi-threaded algorithm that improved CRM location accuracy by 60%, impacting over 2 million profiles.</li>
                                <li>Delivered a Java-MongoDB solution that seamlessly corrected millions of merged candidate profiles, saving developer bandwidth and boosting data integrity by 35%.</li>
                            </ul>
                        </div>
                        <div class="experience-item">
                            <h4>Software Engineer</h4>
                            <span class="company-duration">Vassar Labs, Hyderabad, India | May 2017 - Feb 2020</span>
                            <br>
                            <ul class="experience-details">
                                <li>Led a team of developers in building APWRIMS, a state-level SCADA system, improving water resource allocation by 20% through real-time data tracking and visualization.</li>
                                <li>Developed automated reporting tools that reduced report generation time by 90%, saving over 10 hours of manual work per month.</li>
                                <li>Designed APIs with <strong>Java</strong> and <strong>Play Framework</strong> to unify data from 10+ government sectors, enhancing operational efficiency and transparency.</li>
                            </ul>
                        </div>
                    </div>`;
                break;


            case 'projects':
                content = `<h3>Projects</h3><p>Details about my projects...</p>`;
                break;

            case 'research':
                content = `<h3>Research</h3><p>Information about my research...</p>`;
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
                            <a href="assets/files/certificates/AI_Powered_Engineer.pdf" target="_blank" download class="btn-download">Download Certification</a>
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
