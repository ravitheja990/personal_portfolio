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
                    <h3>Work Experience</h3>
                    <p><strong>Oracle:</strong> Managed large-scale backend systems with Go, Python, Docker, and Kubernetes...</p>
                    <p><strong>Phenom:</strong> Led microservices development with Java, Kafka, and MongoDB...</p>
                    <p><strong>Vassar Labs:</strong> Spearheaded the APWRIMS project with Angular, Java, and Cassandra...</p>`;
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
