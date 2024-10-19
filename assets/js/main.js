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
                    content = `
                        <h3 class="section-title">Projects</h3>
                        <div class="project-container">

                            <!-- CupCake Carbon Cycle Model Project -->
                            <div class="project-item">
                                <h4>CupCake Carbon Cycle Model</h4>
                                <span class="project-description">Full-stack web application for visualizing carbon cycles using React and Python.</span><br>
                                <div class="project-content">
                                    <p>Developed a full-stack solution to track and visualize the carbon cycle across ecosystems, enabling researchers to understand the impact of carbon emissions on climate change. 
                                    The project uses <strong>React</strong> on the front-end and <strong>Python</strong> on the back-end for processing and displaying real-time data.</p>
                                    <p>Tech Stack: <strong>React, Python, Flask, PostgreSQL</strong></p>
                                    <p><strong>Impact:</strong> Enhanced research productivity by allowing scientists to visualize data trends in real-time, reducing data processing time by 30%.</p>
                                </div>
                            </div>

                            <!-- RAG-based Chatbot Model Project -->
                            <div class="project-item">
                                <h4>RAG-based Chatbot Model</h4>
                                <span class="project-description">Retrieval-Augmented Generation (RAG)-based chatbot for scientific research assistance.</span><br>
                                <div class="project-content">
                                    <p>Developed a chatbot model using <strong>Retrieval-Augmented Generation (RAG)</strong> to assist researchers by providing real-time responses to inquiries based on scientific papers and datasets. 
                                    The chatbot integrates with a document retrieval system that surfaces the most relevant information on demand.</p>
                                    <p>Tech Stack: <strong>Python, TensorFlow, Elasticsearch, FastAPI</strong></p>
                                    <p><strong>Impact:</strong> Improved research efficiency by reducing the time spent on manual searches through scientific papers, making research 40% faster.</p>
                                </div>
                            </div>

                            <!-- VpaidWrapper Tool Project -->
                            <div class="project-item">
                                <h4>VpaidWrapper Tool</h4>
                                <span class="project-description">A tool for tracking and processing over 500 million ad pixels weekly using OCI and AWS.</span><br>
                                <div class="project-content">
                                    <p>Created a tool that integrates with ad platforms to track ad data and process over 500 million ad pixels weekly. 
                                    The tool optimizes ad-tracking, ensuring the accuracy and efficiency of ad campaign monitoring.</p>
                                    <p>Tech Stack: <strong>Node.js, AWS Lambda, DynamoDB, OCI</strong></p>
                                    <p><strong>Impact:</strong> Increased ad-tracking accuracy by 30%, reducing the time needed for campaign performance reporting by 50%.</p>
                                </div>
                            </div>

                            <!-- APWRIMS SCADA System Project -->
                            <div class="project-item">
                                <h4>APWRIMS SCADA System</h4>
                                <span class="project-description">Real-time water resource management for the state of Andhra Pradesh.</span><br>
                                <div class="project-content">
                                    <p>Led the development of a SCADA system for water resource management, helping to improve real-time water tracking and optimize water distribution across the state of Andhra Pradesh.</p>
                                    <p>Tech Stack: <strong>Angular, Java, Cassandra, Kafka, SCADA</strong></p>
                                    <p><strong>Impact:</strong> Improved water resource allocation by 20%, reduced manual intervention in the monitoring system by 90%, and saved over 10 hours of manual reporting work each week.</p>
                                </div>
                            </div>

                            <!-- Phenom Candidate Profile Microservice Project -->
                            <div class="project-item">
                                <h4>Phenom Candidate Profile Microservice</h4>
                                <span class="project-description">Real-time candidate data processing for Phenom’s HR tech platform.</span><br>
                                <div class="project-content">
                                    <p>Developed a multi-threaded microservice for processing candidate data in real-time, improving the accuracy and speed of candidate profile creation, merging, and job recommendation features. The system handles millions of candidate profiles and automates the process of data correction.</p>
                                    <p>Tech Stack: <strong>Java, MongoDB, Kafka, Microservices</strong></p>
                                    <p><strong>Impact:</strong> Improved data processing speed by 40%, reduced profile merge errors by 60%, and saved 90% of developer bandwidth by automating manual data correction tasks.</p>
                                </div>
                            </div>

                            <!-- Candidate Location Search Enhancement Project -->
                            <div class="project-item">
                                <h4>Candidate Location Search Enhancement</h4>
                                <span class="project-description">Enhancing candidate location-based search in Phenom’s HR platform.</span><br>
                                <div class="project-content">
                                    <p>Enhanced the candidate location-based search functionality by creating a priority-based multi-threaded algorithm, improving the accuracy of job recommendations for millions of candidates.</p>
                                    <p>Tech Stack: <strong>Java, MongoDB, Microservices</strong></p>
                                    <p><strong>Impact:</strong> Increased job recommendation accuracy by 60%, improving the overall relevance of search results for candidates and boosting user engagement on the platform.</p>
                                </div>
                            </div>

                            <!-- Oracle MoatPro Project -->
                            <div class="project-item">
                                <h4>Oracle MoatPro</h4>
                                <span class="project-description">Ad-search engine with enhanced security and performance through Docker and Kubernetes.</span><br>
                                <div class="project-content">
                                    <p>Led the containerization and performance optimization of Oracle's MoatPro ad-search engine. 
                                    The project involved transitioning the platform from a monolithic architecture to microservices, improving system performance and security.</p>
                                    <p>Tech Stack: <strong>Docker, Kubernetes, ArgoCD, OCI</strong></p>
                                    <p><strong>Impact:</strong> Improved system performance by 40%, reduced security vulnerabilities by 50%, and streamlined development workflows through containerization and automation with Kubernetes.</p>
                                </div>
                            </div>

                        </div>`;
                    break;
            
            case 'research':
                content = `<h3>Research</h3><p>Information about my research coming soon...</p>`;
                break;

            case 'education':
                    content = `
                        <h3 class="section-title">Education</h3>
                        <div class="education-container">
                            <!-- UCR Education -->
                            <div class="education-item">
                                <h4>MS in Computer Science & Engineering</h4>
                                <span class="education-description">University of California, Riverside | 2023-2024</span><br>
                                <div class="education-content">
                                    <p>Specialized in Artificial Intelligence, Machine Learning, and Cloud Computing. The program provided hands-on experience with modern AI/ML tools, algorithms, and technologies for cloud-based deployment.</p>
                                    <p><strong>Relevant Courses:</strong> Deep Learning, Cloud Computing, Distributed Systems, AI for Healthcare.</p>
                                    <p><strong>Thesis/Project:</strong> Leading the development of a machine learning-based model for oceanic carbon cycle prediction, integrating real-time sensor data.</p>
                                </div>
                            </div>
                
                            <!-- JNTU Education -->
                            <div class="education-item">
                                <h4>BTech in Computer Science & Engineering</h4>
                                <span class="education-description">Jawaharlal Nehru Technological University, Hyderabad | 2013-2017</span><br>
                                <div class="education-content">
                                    <p>Graduated with honors, focusing on software development, data structures, algorithms, and system architecture. Actively participated in multiple software development projects, including full-stack development and database management.</p>
                                    <p><strong>Relevant Courses:</strong> Data Structures, Operating Systems, Software Engineering, Database Management Systems.</p>
                                    <p><strong>Final Project:</strong> Developed an intelligent water management system for monitoring and optimizing resource usage across rural regions using IoT and cloud technologies.</p>
                                </div>
                            </div>
                        </div>`;
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

            case 'recommendations':
                content = `
                    <h3 class="section-title">Recommendations</h3>
                    <div class="recommendations-container">
                        <!-- Recommendation 1 -->
                        <a href="https://www.linkedin.com/in/travitheja/details/recommendations/" target="_blank" class="recommendation-item">
                            <img src="assets/img/recommendation1.png" alt="LinkedIn Recommendation 1">
                        </a>

                        <!-- Recommendation 2 -->
                        <a href="https://www.linkedin.com/in/travitheja/details/recommendations/" target="_blank" class="recommendation-item">
                            <img src="assets/img/recommendation2.png" alt="LinkedIn Recommendation 2">
                        </a>

                        <!-- Recommendation 3 -->
                        <a href="https://www.linkedin.com/in/travitheja/details/recommendations/" target="_blank" class="recommendation-item">
                            <img src="assets/img/recommendation3.png" alt="LinkedIn Recommendation 3">
                        </a>
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

document.addEventListener('DOMContentLoaded', function () {
    const skillBoxes = document.querySelectorAll('.skills__box');
    const contentArea = document.getElementById('skills-content-area');
    let currentSkillSection = ''; // Track the currently loaded skill section

    skillBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const section = box.getAttribute('data-section');

            if (currentSkillSection === section) {
                // Collapse the content if the same box is clicked again
                toggleSkillContent(false);
                currentSkillSection = ''; // Reset the section
            } else {
                // Load the content for the clicked box
                loadSkillContent(section);
                currentSkillSection = section; // Update the current section
            }
        });
    });

    function loadSkillContent(section) {
        let content = '';

        switch (section) {
            case 'backend':
                content = `
                    <div class="skills__details">
                        <h3>Backend Development</h3>
                        <p>Java (Spring Boot, Java 8+) - Built scalable microservices and APIs.</p>
                        <p>Python (FastAPI, Flask) - Developed high-performance backend systems.</p>
                        <p>Docker, Kubernetes, ArgoCD - Led microservice containerization for scalability.</p>
                        <p>PostgreSQL, MongoDB, Cassandra - Engineered databases for high throughput.</p>
                    </div>`;
                break;

            case 'ai-ml':
                content = `
                    <div class="skills__details">
                        <h3>AI/ML Expertise</h3>
                        <p>Machine Learning & AI - Developed models using TensorFlow, PyTorch, and Scikit-learn.</p>
                        <p>NLP & Chatbots - Built RAG-based conversational systems.</p>
                        <p>Data Pipelines - Designed data processing pipelines using Pandas, NumPy, and Spark.</p>
                    </div>`;
                break;

            case 'fullstack':
                content = `
                    <div class="skills__details">
                        <h3>Full Stack & Frontend Development</h3>
                        <p>ReactJS, JavaScript - Built interactive UIs with efficient state management.</p>
                        <p>HTML5, CSS3 - Created responsive layouts optimized for multiple devices.</p>
                        <p>API Integration - Integrated backend APIs with REST and GraphQL.</p>
                    </div>`;
                break;

            case 'cloud':
                content = `
                    <div class="skills__details">
                        <h3>Cloud & DevOps</h3>
                        <p>AWS, GCP, OCI - Architected cloud-native solutions with scalability in mind.</p>
                        <p>CI/CD Pipelines - Streamlined development with Jenkins and ArgoCD.</p>
                        <p>Prometheus, Grafana - Integrated monitoring and alerting for operational efficiency.</p>
                    </div>`;
                break;

            default:
                content = `<p>Select a skill to view details.</p>`;
        }

        // Update the content area with the new content
        contentArea.innerHTML = content;

        // Show the content with a smooth transition
        toggleSkillContent(true);
    }

    function toggleSkillContent(show) {
        if (show) {
            contentArea.classList.add('active');
        } else {
            contentArea.classList.remove('active');
            contentArea.innerHTML = ''; // Clear the content
        }
    }
});