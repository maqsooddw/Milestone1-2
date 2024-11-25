// Experience section variables and functions

let experienceCount = 0;

// Function to show or hide the experience form based on user's experience selection
function showExperienceForm(hasExperience: boolean): void {
    const experienceContainer = document.getElementById('experience-container') as HTMLElement;
    const freshGraduateMessage = document.getElementById('fresh-graduate-message') as HTMLElement;

    if (hasExperience) {
        experienceContainer.style.display = 'block';
        freshGraduateMessage.style.display = 'none';
        experienceContainer.innerHTML = '';
        experienceCount = 0;
        addExperienceEntry();
    } else {
        experienceContainer.style.display = 'none';
        freshGraduateMessage.style.display = 'block';
    }
}

// Function to add a new experience entry with fields for each required detail
function addExperienceEntry(): void {
    experienceCount++;
    const experienceContainer = document.getElementById('experience-container') as HTMLElement;
    const experienceEntry = document.createElement('div');
    experienceEntry.classList.add('experience-entry');

    experienceEntry.innerHTML = `
        <fieldset>
            <legend>Experience ${experienceCount}</legend>
            
            <!-- Employer Name Field Start -->
            <label>Employer Name:</label>
            <input type="text" class="input-field employer-name" required><br>
            <!-- Employer Name Field End -->

            <!-- Job Title Field Start -->
            <label>Job Title:</label>
            <input type="text" class="input-field job-title" required><br>
            <!-- Job Title Field End -->

            <!-- Year From Field Start -->
            <label>Year From:</label>
            <input type="month" class="input-field year-from" required><br>
            <!-- Year From Field End -->

            <!-- Year To Field Start -->
            <label>Year To:</label>
            <input type="month" class="input-field year-to" required><br>
            <!-- Year To Field End -->

            <!-- Job Location Field Start -->
            <label>Job Location:</label>
            <input type="text" class="input-field job-location" required><br>
            <!-- Job Location Field End -->

            <!-- Job Description Field Start -->
            <label>Job Description:</label>
            <textarea class="input-field job-description" placeholder="Enter job description" required></textarea><br>
            <a href="#" onclick="addJobDescription(this); return false;">Add More Description</a><br>
            <!-- Job Description Field End -->
        </fieldset>
    `;

    experienceContainer.appendChild(experienceEntry);
}

// Function to add additional job description text areas when user clicks "Add More Description"
function addJobDescription(link: HTMLElement): void {
    const additionalDescription = document.createElement('textarea');
    additionalDescription.classList.add('input-field', 'job-description');
    additionalDescription.placeholder = 'Enter additional job description';
    link.parentElement!.insertBefore(additionalDescription, link);
}

// Event listener to handle "Add More Experience" button click
document.addEventListener('DOMContentLoaded', () => {
    const addExperienceBtn = document.getElementById('add-experience-btn');
    if (addExperienceBtn) {
        addExperienceBtn.addEventListener('click', () => {
            addExperienceEntry();
        });
    }
});

// Education section variables and functions

let educationCount = 0;

function addEducationEntry(): void {
    educationCount++;
    const educationContainer = document.getElementById('education-container') as HTMLElement;
    const educationEntry = document.createElement('div');
    educationEntry.classList.add('education-entry');

    educationEntry.innerHTML = `
        <fieldset>
            <legend>Education ${educationCount}</legend>
            
            <!-- Education Level Field Start -->
            <label>Education Level:</label>
            <select class="input-field education-level" required>
                <option value="">Select</option>
                <option value="Under Matric">Under Matric</option>
                <option value="Matric">Matric</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Graduate (2 years)">Graduate (2 years)</option>
                <option value="Graduate (4 years)">Graduate (4 years)</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
            </select><br>
            <!-- Education Level Field End -->

            <!-- Institute Name Field Start -->
            <label>Institute Name:</label>
            <input type="text" class="input-field institute-name" required><br>
            <!-- Institute Name Field End -->

            <!-- Institute Location Field Start -->
            <label>Institute Location:</label>
            <input type="text" class="input-field institute-location" required><br>
            <!-- Institute Location Field End -->

            <!-- Pass Out Year Field Start -->
            <label>Pass Out Year:</label>
            <input type="month" class="input-field passed-out-year" required><br>
            <!-- Pass Out Year Field End -->

            <!-- Subject Field Start -->
            <label>Subject:</label>
            <input type="text" class="input-field subject" required><br>
            <!-- Subject Field End -->
        </fieldset>
    `;

    educationContainer.appendChild(educationEntry);
}

// Skills section function

function addSkill(): void {
    const skillsContainer = document.getElementById('skills-container') as HTMLElement;
    const skillInput = document.createElement('input');
    skillInput.type = 'text';
    skillInput.placeholder = 'Enter a skill';
    skillInput.classList.add('skill-input', 'input-field');
    skillInput.required = true;
    skillsContainer.appendChild(skillInput);
}

// Function to display the selected image in the resume output
function displaySelectedImage(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.getElementById('image-preview') as HTMLImageElement;
            imagePreview.src = e.target!.result as string;
            imagePreview.style.display = 'block'; // Make sure image is visible once loaded
        };
        reader.readAsDataURL(file);
    }
}

// Function to generate resume on form submission
document.getElementById('resume-form')!.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    let resumeHTML = '<h2>Generated Resume</h2>';

    // Display Profile Picture if uploaded
    const imagePreview = document.getElementById('image-preview') as HTMLImageElement;
    if (imagePreview.src) {
        resumeHTML += `<img src="${imagePreview.src}" alt="Profile Picture" style="max-width: 150px; max-height: 150px;"><br>`;
    }

    // Basic Info Section
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const state = (document.getElementById('state') as HTMLInputElement).value;
    resumeHTML += `<h3>${name}</h3><p>Email: ${email}</p><p>Contact: ${contact}</p><p>Location: ${city}, ${state}</p>`;

    // Skills Section
    const skillNodeList = document.querySelectorAll('.skill-input');
    if (skillNodeList.length > 0) {
        resumeHTML += '<h3>Skills</h3><ul>';
        skillNodeList.forEach(skillNode => {
            const skill = (skillNode as HTMLInputElement).value;
            resumeHTML += `<li>${skill}</li>`;
        });
        resumeHTML += '</ul>';
    }

    // Experience Section
    const experienceNodeList = document.querySelectorAll('.experience-entry');
    const experiences: HTMLElement[] = [];
    for (let i = 0; i < experienceNodeList.length; i++) {
        experiences.push(experienceNodeList[i] as HTMLElement);
    }

    if (experiences.length > 0) {
        resumeHTML += '<h3>Experience</h3>';
        experiences.forEach((experience, index) => {
            const employerName = (experience.querySelector('.employer-name') as HTMLInputElement).value;
            const jobTitle = (experience.querySelector('.job-title') as HTMLInputElement).value;
            const yearFrom = (experience.querySelector('.year-from') as HTMLInputElement).value;
            const yearTo = (experience.querySelector('.year-to') as HTMLInputElement).value;
            const jobLocation = (experience.querySelector('.job-location') as HTMLInputElement).value;
            const jobDescriptions = experience.querySelectorAll('.job-description') as NodeListOf<HTMLTextAreaElement>;

            resumeHTML += `<p><strong>${jobTitle}</strong> at ${employerName} (${yearFrom} - ${yearTo}), ${jobLocation}</p><ul>`;
            for (let i = 0; i < jobDescriptions.length; i++) {
                resumeHTML += `<li>${jobDescriptions[i].value}</li>`;
            }
            resumeHTML += '</ul>';
        });
    }

    // Education Section
    const educationNodeList = document.querySelectorAll('.education-entry');
    const educations: HTMLElement[] = [];
    for (let i = 0; i < educationNodeList.length; i++) {
        educations.push(educationNodeList[i] as HTMLElement);
    }

    if (educations.length > 0) {
        resumeHTML += '<h3>Education</h3>';
        educations.forEach((education, index) => {
            const educationLevel = (education.querySelector('.education-level') as HTMLSelectElement).value;
            const instituteName = (education.querySelector('.institute-name') as HTMLInputElement).value;
            const instituteLocation = (education.querySelector('.institute-location') as HTMLInputElement).value;
            const passedOutYear = (education.querySelector('.passed-out-year') as HTMLInputElement).value;
            const subject = (education.querySelector('.subject') as HTMLInputElement).value;

            resumeHTML += `<p>${educationLevel} in ${subject} from ${instituteName}, ${instituteLocation} (${passedOutYear})</p>`;
        });
    }

    resumeOutput.innerHTML = resumeHTML;
});
