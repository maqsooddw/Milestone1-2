// -------------static resume code------------------------------------
function Showhideskills() {
    var Showhide2 = document.getElementById("skills");
    if (Showhide2) {
        if (Showhide2.style.display === "none") {
            Showhide2.style.display = "block";
        }
        else {
            Showhide2.style.display = "none";
        }
    }
    else {
        console.error("Element with id 'skills' not found");
    }
}
// end static resume code ...............................................
// --------------------------code for dynamic resume--------------
var dynamicresume = document.getElementById('dynamicall');
dynamicresume.style.display = "none";
// Experience section variables and functions
var addexpbtn = document.getElementById("add-experience-btn");
addexpbtn.style.display = "none";
var experienceCount = 0;
// Function to show or hide the experience form based on user's experience selection
function showExperienceForm(hasExperience) {
    var experienceContainer = document.getElementById("experience-container");
    var freshGraduateMessage = document.getElementById("fresh-graduate-message");
    if (hasExperience) {
        experienceContainer.style.display = "block";
        freshGraduateMessage.style.display = "none";
        addexpbtn.style.display = "block";
        experienceContainer.innerHTML = "";
        experienceCount = 0;
        addExperienceEntry();
    }
    else {
        experienceContainer.style.display = "none";
        freshGraduateMessage.style.display = "block";
    }
}
// Function to add a new experience entry with fields for each required detail
function addExperienceEntry() {
    experienceCount++;
    var experienceContainer = document.getElementById("experience-container");
    var experienceEntry = document.createElement("div");
    experienceEntry.classList.add("experience-entry");
    experienceEntry.innerHTML = "\n        <fieldset>\n            <legend>Experience ".concat(experienceCount, "</legend>\n            \n            <!-- Employer Name Field Start -->\n            <label>Employer Name:</label>\n            <input type=\"text\" class=\"input-field employer-name\" required><br>\n            <!-- Employer Name Field End -->\n\n            <!-- Job Title Field Start -->\n            <label>Job Title:</label>\n            <input type=\"text\" class=\"input-field job-title\" required><br>\n            <!-- Job Title Field End -->\n\n            <!-- Year From Field Start -->\n            <label>Year From:</label>\n            <input type=\"month\" class=\"input-field year-from\" required><br>\n            <!-- Year From Field End -->\n\n            <!-- Year To Field Start -->\n            <label>Year To:</label>\n            <input type=\"month\" class=\"input-field year-to\" required><br>\n            <!-- Year To Field End -->\n\n            <!-- Job Location Field Start -->\n            <label>Job Location:</label>\n            <input type=\"text\" class=\"input-field job-location\" required><br>\n            <!-- Job Location Field End -->\n\n            <!-- Job Description Field Start -->\n            <label>Job Description:</label>\n            <textarea class=\"input-field job-description\" placeholder=\"Enter job description\" required></textarea><br>\n            <a href=\"#\" onclick=\"addJobDescription(this); return false;\">Add More Description</a><br>\n            <!-- Job Description Field End -->\n        </fieldset>\n    ");
    experienceContainer.appendChild(experienceEntry);
}
// Function to add additional job description text areas when user clicks "Add More Description"
function addJobDescription(link) {
    var additionalDescription = document.createElement("textarea");
    additionalDescription.classList.add("input-field", "job-description");
    additionalDescription.placeholder = "Enter additional job description";
    link.parentElement.insertBefore(additionalDescription, link);
}
// Event listener to handle "Add More Experience" button click
document.addEventListener("DOMContentLoaded", function () {
    var addExperienceBtn = document.getElementById("add-experience-btn");
    if (addExperienceBtn) {
        addExperienceBtn.addEventListener("click", function () {
            addExperienceEntry();
        });
    }
});
// Education section variables and functions
var educationCount = 0;
addEducationEntry();
function addEducationEntry() {
    educationCount++;
    var educationContainer = document.getElementById("education-container");
    var educationEntry = document.createElement("div");
    educationEntry.classList.add("education-entry");
    educationEntry.innerHTML = "\n        <fieldset>\n            <legend>Education ".concat(educationCount, "</legend>\n            \n            <!-- Education Level Field Start -->\n            <label>Education Level:</label>\n            <select class=\"input-field education-level\" style=\"color: black;\" required >\n                <option value=\"\">Select</option>\n                <option value=\"Under Matric\" >Under Matric</option>\n                <option value=\"Matric\">Matric</option>\n                <option value=\"Intermediate\">Intermediate</option>\n                <option value=\"Graduate\">Graduate</option>\n                <option value=\"Post Graduate\">Post Graduate</option>\n                <option value=\"Masters\">Masters</option>\n                <option value=\"PHD\">PHD</option>\n            </select><br>\n            <!-- Education Level Field End -->\n\n            <!-- Institute Name Field Start -->\n            <label>Institute Name:</label>\n            <input type=\"text\" class=\"input-field institute-name\" required><br>\n            <!-- Institute Name Field End -->\n\n            <!-- Institute Location Field Start -->\n            <label>Institute Location:</label>\n            <input type=\"text\" class=\"input-field institute-location\" required><br>\n            <!-- Institute Location Field End -->\n\n            <!-- Pass Out Year Field Start -->\n            <label>Pass Out Year:</label>\n            <input type=\"month\" class=\"input-field passed-out-year\" required><br>\n            <!-- Pass Out Year Field End -->\n\n            <!-- Subject Field Start -->\n            <label>Subject:</label>\n            <input type=\"text\" class=\"input-field subject\" required><br>\n            <!-- Subject Field End -->\n        </fieldset>\n    ");
    educationContainer.appendChild(educationEntry);
}
// Skills section function
function addSkill() {
    var skillsContainer = document.getElementById("skills-container");
    var skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Enter a skill";
    skillInput.classList.add("skill-input", "input-field");
    skillInput.required = true;
    skillsContainer.appendChild(skillInput);
}
// Function to display the selected image in the resume output
function displaySelectedImage(event) {
    var _a;
    var fileInput = event.target;
    var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var propic1 = document.getElementById("image");
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imagePreview = document.getElementById("image-preview");
            if (e.target) {
                var imageSrc = e.target.result;
                imagePreview.src = imageSrc;
                imagePreview.style.display = "block"; // Ensure image preview is visible
                // Update the main image with the new uploaded image
                propic1.src = imageSrc;
            }
        };
        reader.readAsDataURL(file);
    }
    else {
        // If no file is selected, reset the profile picture's `src`
        propic1.src = "";
    }
}
// fetching date from static resume templete
var fullnameA = document.getElementById("fullname");
var cityA = document.getElementById("City");
var stateA = document.getElementById("State");
var locationA = document.getElementById("location");
var emailA = document.getElementById("email");
var contactnoA = document.getElementById("contactno");
var skillsF = document.getElementById("skillsA");
var ObectiveF = document.getElementById("ObjectiveA");
// Function to process the selected month
function processMonth(monthInput) {
    if (!monthInput) {
        return "No month selected.";
    }
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    // Split the value into year and month
    var _a = monthInput.split("-"), year = _a[0], month = _a[1];
    var monthIndex = parseInt(month, 10) - 1;
    if (monthIndex < 0 || monthIndex > 11) {
        return "Invalid month selected.";
    }
    var monthName = monthNames[monthIndex];
    // Format the output
    return "".concat(monthName, " ").concat(year);
}
// Function to generate resume on form submission
document
    .getElementById("resume-form")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    var dynamicresume = document.getElementById('dynamicall');
    dynamicresume.style.display = "block";
    // const resumeOutput = document.getElementById(
    //   "resume-output"
    // ) as HTMLElement;
    // let resumeHTML = "<h2>Generated Resume</h2>";
    // // Display Profile Picture if uploaded
    // const imagePreview = document.getElementById(
    //   "image-preview"
    // ) as HTMLImageElement;
    // if (imagePreview.src) {
    //   resumeHTML += `<img src="${imagePreview.src}" alt="Profile Picture" style="max-width: 150px; max-height: 150px;"><br>`;
    // }
    // Basic Info Section
    var name = document.getElementById("nameF").value;
    if (fullnameA) {
        fullnameA.textContent = name;
    }
    var email = document.getElementById("emailF").value;
    if (emailA) {
        emailA.textContent = email;
    }
    var contact = document.getElementById("contactF")
        .value;
    if (contactnoA) {
        contactnoA.textContent = contact;
    }
    var city = document.getElementById("cityF").value;
    if (cityA) {
        cityA.textContent = city;
    }
    var state = document.getElementById("stateF").value;
    if (stateA) {
        stateA.textContent = state;
    }
    var objective = document.getElementById("objectiveF").value;
    if (ObectiveF) {
        ObectiveF.textContent = objective;
    }
    // Skills Section
    var skillNodeList = document.querySelectorAll(".skill-input");
    // if (skillNodeList.length > 0) {
    //   resumeHTML += "<h3>Skills</h3><ul>";
    //   skillNodeList.forEach((skillNode) => {
    //     const skill = (skillNode as HTMLInputElement).value;
    //     resumeHTML += `<li>${skill}</li>`;
    //   });
    // }
    skillsF.innerHTML = "<h3>Skill</h3><ul>";
    if (skillNodeList.length > 0) {
        // Loop through skillNodeList and append each skill to the new skillsF section
        skillNodeList.forEach(function (skillNode) {
            var skill = skillNode.value;
            skillsF.innerHTML += "<li>".concat(skill, "</li>");
        });
    }
    else {
        skillsF.innerHTML += "<ul><li>On learning</li></ul>";
    }
    // Experience Section
    var leftsec1 = document.getElementById("works");
    var experincehtml = "";
    var experienceNodeList = document.querySelectorAll(".experience-entry");
    var experiences = [];
    for (var i = 0; i < experienceNodeList.length; i++) {
        experiences.push(experienceNodeList[i]);
    }
    if (experiences.length > 0) {
        experincehtml += "<h3>Work Experience</h3>";
        experiences.forEach(function (experience, index) {
            var employerName = experience.querySelector(".employer-name").value;
            var jobTitle = experience.querySelector(".job-title").value;
            var yearFrom = experience.querySelector(".year-from").value;
            var yearTo = experience.querySelector(".year-to").value;
            var jobLocation = experience.querySelector(".job-location").value;
            var jobDescriptions = experience.querySelectorAll(".job-description");
            experincehtml += "<div id=\"jt\"><strong>".concat(jobTitle, "</strong></div>");
            experincehtml += "<div id=\"j1\"> <div id=\"empN\"> <p> ".concat(employerName, " </p></div> <div id=\"YtoD\"> <p> ").concat(processMonth(yearFrom), " - ").concat(processMonth(yearTo), "</p> </div> </div>");
            experincehtml += "<p id=\"jbl\">  ".concat(jobLocation, "</p>");
            for (var i = 0; i < jobDescriptions.length; i++) {
                experincehtml += "<ul>";
                experincehtml += "<li id=\"jobdes\">".concat(jobDescriptions[i].value, "</li>");
                experincehtml += "</ul>";
            }
            experincehtml += "<div id=\"seprator\"> </div>";
            leftsec1.innerHTML = experincehtml;
        });
    }
    else {
        leftsec1.innerHTML =
            '<h3>Work Experince </h3> <p>Exciting! As a fresh candidate, I am ready to embark on a professional journey with enthusiasm and a strong skill set!</p>';
    }
    // Education Section
    var educationall = "";
    var edu = document.getElementById('edu');
    var educationNodeList = document.querySelectorAll(".education-entry");
    var educations = [];
    for (var i = 0; i < educationNodeList.length; i++) {
        educations.push(educationNodeList[i]);
    }
    if (educations.length > 0) {
        educationall += "<h3>Education</h3>";
        educations.forEach(function (education, index) {
            var educationLevel = education.querySelector(".education-level").value;
            var instituteName = education.querySelector(".institute-name").value;
            var instituteLocation = education.querySelector(".institute-location").value;
            var passedOutYear = education.querySelector(".passed-out-year").value;
            var subject = education.querySelector(".subject").value;
            educationall += "<div id=\"eduels\"><div id=\"eduls\">".concat(educationLevel, " in </div> <div id=\"edus\">").concat(subject, "</div></div>");
            educationall += "<div id=\"eduip\"><div id=\"eduin\">".concat(instituteName, "</div> <div id=\"edupoy\">(").concat(processMonth(passedOutYear), ")</div> </div>");
            educationall += "<div id=\"edui\">".concat(instituteLocation, "</div>");
            educationall += "<div id=\"seprator\"> </div>";
        });
    }
    edu.innerHTML = educationall;
});
//   end education 
