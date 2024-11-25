// -------------static resume code------------------------------------

function Showhideskills() {
  const Showhide2 = document.getElementById("skills") as HTMLElement | null;
  if (Showhide2) {
    if (Showhide2.style.display === "none") {
      Showhide2.style.display = "block";
    } else {
      Showhide2.style.display = "none";
    }
  } else {
    console.error("Element with id 'skills' not found");
  }
}

// end static resume code ...............................................

// --------------------------code for dynamic resume--------------


const dynamicresume=document.getElementById('dynamicall') as HTMLElement

dynamicresume.style.display="none"


// Experience section variables and functions



const addexpbtn = document.getElementById("add-experience-btn") as HTMLElement;
addexpbtn.style.display = "none";

let experienceCount = 0;

// Function to show or hide the experience form based on user's experience selection
function showExperienceForm(hasExperience: boolean): void {
  const experienceContainer = document.getElementById(
    "experience-container"
  ) as HTMLElement;
  const freshGraduateMessage = document.getElementById(
    "fresh-graduate-message"
  ) as HTMLElement;

  if (hasExperience) {
    experienceContainer.style.display = "block";
    freshGraduateMessage.style.display = "none";
    addexpbtn.style.display = "block";
    experienceContainer.innerHTML = "";
    experienceCount = 0;
    addExperienceEntry();
  } else {
    experienceContainer.style.display = "none";
    freshGraduateMessage.style.display = "block";
  }
}

// Function to add a new experience entry with fields for each required detail
function addExperienceEntry(): void {
  experienceCount++;
  const experienceContainer = document.getElementById(
    "experience-container"
  ) as HTMLElement;
  const experienceEntry = document.createElement("div");
  experienceEntry.classList.add("experience-entry");

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
  const additionalDescription = document.createElement("textarea");
  additionalDescription.classList.add("input-field", "job-description");
  additionalDescription.placeholder = "Enter additional job description";
  link.parentElement!.insertBefore(additionalDescription, link);
}

// Event listener to handle "Add More Experience" button click
document.addEventListener("DOMContentLoaded", () => {
  const addExperienceBtn = document.getElementById("add-experience-btn");
  if (addExperienceBtn) {
    addExperienceBtn.addEventListener("click", () => {
      addExperienceEntry();
    });
  }
});

// Education section variables and functions

let educationCount = 0;

addEducationEntry()

function addEducationEntry(): void {
  educationCount++;
  const educationContainer = document.getElementById(
    "education-container"
  ) as HTMLElement;
  const educationEntry = document.createElement("div");
  educationEntry.classList.add("education-entry");

  educationEntry.innerHTML = `
        <fieldset>
            <legend>Education ${educationCount}</legend>
            
            <!-- Education Level Field Start -->
            <label>Education Level:</label>
            <select class="input-field education-level" style="color: black;" required >
                <option value="">Select</option>
                <option value="Under Matric" >Under Matric</option>
                <option value="Matric">Matric</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Masters">Masters</option>
                <option value="PHD">PHD</option>
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
  const skillsContainer = document.getElementById(
    "skills-container"
  ) as HTMLElement;
  const skillInput = document.createElement("input");
  skillInput.type = "text";
  skillInput.placeholder = "Enter a skill";
  skillInput.classList.add("skill-input", "input-field");
  skillInput.required = true;
  skillsContainer.appendChild(skillInput);
}

// Function to display the selected image in the resume output
function displaySelectedImage(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    const propic1 = document.getElementById("image") as HTMLImageElement;

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imagePreview = document.getElementById("image-preview") as HTMLImageElement;
            if (e.target) {
                const imageSrc = e.target.result as string;
                imagePreview.src = imageSrc;
                imagePreview.style.display = "block"; // Ensure image preview is visible

                // Update the main image with the new uploaded image
                propic1.src = imageSrc;
            }
        };

        reader.readAsDataURL(file);
    } else {
        // If no file is selected, reset the profile picture's `src`
        propic1.src = "";
    }
}

// fetching date from static resume templete

let fullnameA = document.getElementById("fullname") as HTMLHeadElement;
let cityA = document.getElementById("City") as HTMLElement;
let stateA = document.getElementById("State") as HTMLTableCellElement;
let locationA = document.getElementById("location") as HTMLElement;
let emailA = document.getElementById("email") as HTMLElement;
let contactnoA = document.getElementById("contactno") as HTMLElement;
let skillsF = document.getElementById("skillsA") as HTMLElement;
let ObectiveF = document.getElementById("ObjectiveA") as HTMLElement;


        // Function to process the selected month
        function processMonth(monthInput: string): string {
          if (!monthInput) {
              return "No month selected.";
          }
      
          const monthNames = [
              "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
          ];
      
          // Split the value into year and month
          const [year, month] = monthInput.split("-");
          const monthIndex = parseInt(month, 10) - 1;
      
          if (monthIndex < 0 || monthIndex > 11) {
              return "Invalid month selected.";
          }
      
          const monthName = monthNames[monthIndex];
      
          // Format the output
          return `${monthName} ${year}`;
      }



// Function to generate resume on form submission
document
  .getElementById("resume-form")!
  .addEventListener("submit", function (event: Event) {
    event.preventDefault();


    const dynamicresume=document.getElementById('dynamicall') as HTMLElement

dynamicresume.style.display="block"

  
    // Basic Info Section
    const name = (document.getElementById("nameF") as HTMLInputElement).value;
    if (fullnameA) {
      fullnameA.textContent = name;
    }

    const email = (document.getElementById("emailF") as HTMLInputElement).value;
    if (emailA) {
      emailA.textContent = email;
    }

    const contact = (document.getElementById("contactF") as HTMLInputElement)
      .value;
    if (contactnoA) {
      contactnoA.textContent = contact;
    }

   let city = (document.getElementById("cityF") as HTMLInputElement).value;
    if (cityA) {
        cityA.textContent = city;
      

    }

    const state = (document.getElementById("stateF") as HTMLInputElement).value;
    if (stateA) {
      stateA.textContent = state;
    }

    const objective = (
      document.getElementById("objectiveF") as HTMLTextAreaElement
    ).value;
    if (ObectiveF) {
      ObectiveF.textContent = objective;
    }

    // Skills Section
    const skillNodeList = document.querySelectorAll(".skill-input");

    skillsF.innerHTML = "<h3>Skill</h3><ul>";

    if (skillNodeList.length > 0) {
      // Loop through skillNodeList and append each skill to the new skillsF section
      skillNodeList.forEach((skillNode) => {
        const skill = (skillNode as HTMLInputElement).value;
        skillsF.innerHTML += `<li>${skill}</li>`;
      });
    } else {
      skillsF.innerHTML += "<ul><li>On learning</li></ul>";
    }

    // Experience Section
    let leftsec1 = document.getElementById("works") as HTMLElement;
    let experincehtml:string = ""
    const experienceNodeList = document.querySelectorAll(".experience-entry");
    const experiences: HTMLElement[] = [];
    for (let i = 0; i < experienceNodeList.length; i++) {
      experiences.push(experienceNodeList[i] as HTMLElement);
    }

    if (experiences.length > 0) {
      experincehtml += "<h3>Work Experience</h3>";
      experiences.forEach((experience, index) => {
        const employerName = (
          experience.querySelector(".employer-name") as HTMLInputElement
        ).value;
        const jobTitle = (
          experience.querySelector(".job-title") as HTMLInputElement
        ).value;
        const yearFrom = (
          experience.querySelector(".year-from") as HTMLInputElement
        ).value;
        const yearTo = (
          experience.querySelector(".year-to") as HTMLInputElement
        ).value;
        const jobLocation = (
          experience.querySelector(".job-location") as HTMLInputElement
        ).value;
        const jobDescriptions = experience.querySelectorAll(
          ".job-description"
        ) as NodeListOf<HTMLTextAreaElement>;




   
        experincehtml += `<div id="jt"><strong>${jobTitle}</strong></div>`
        experincehtml += `<div id="j1"> <div id="empN"> <p> ${employerName} </p></div> <div id="YtoD"> <p> ${processMonth(yearFrom)} - ${processMonth(yearTo)}</p> </div> </div>`
        experincehtml += `<p id="jbl">  ${jobLocation}</p>`;
       

        for (let i = 0; i < jobDescriptions.length; i++) {
         experincehtml += "<ul>";  
         experincehtml += `<li id="jobdes">${jobDescriptions[i].value}</li>`;
         experincehtml += "</ul>";
        }
        experincehtml += `<div id="seprator"> </div>`    
        
leftsec1.innerHTML=experincehtml

      });
    } else {
      leftsec1.innerHTML =
        '<h3>Work Experince </h3> <p>Exciting! As a fresh candidate, I am ready to embark on a professional journey with enthusiasm and a strong skill set!</p>';
    }

    // Education Section
    let educationall:string=""
    const edu=document.getElementById('edu') as HTMLElement
    const educationNodeList = document.querySelectorAll(".education-entry");
    const educations: HTMLElement[] = [];
    for (let i = 0; i < educationNodeList.length; i++) {
      educations.push(educationNodeList[i] as HTMLElement);
    }

    if (educations.length > 0) {
      educationall += "<h3>Education</h3>";
      educations.forEach((education, index) => {
        const educationLevel = (
          education.querySelector(".education-level") as HTMLSelectElement
        ).value;
        const instituteName = (
          education.querySelector(".institute-name") as HTMLInputElement
        ).value;
        const instituteLocation = (
          education.querySelector(".institute-location") as HTMLInputElement
        ).value;
        const passedOutYear = (
          education.querySelector(".passed-out-year") as HTMLInputElement
        ).value;
        const subject = (
          education.querySelector(".subject") as HTMLInputElement
        ).value;

        educationall += `<div id="eduels"><div id="eduls">${educationLevel} in </div> <div id="edus">${subject}</div></div>`;
        educationall += `<div id="eduip"><div id="eduin">${instituteName}</div> <div id="edupoy">(${processMonth(passedOutYear)})</div> </div>`;
        educationall += `<div id="edui">${instituteLocation}</div>`
        educationall += `<div id="seprator"> </div>`        
      });
    }

    edu.innerHTML = educationall;
  });

//   end education 


