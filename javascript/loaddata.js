(function () {
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

const langContainer = document.querySelector(".lang__lang-container");
const containerTechno = document.querySelector(".techno__techno-container");

fetch(
  "https://my-json-server.typicode.com/jordie-droid/portfoliodatabase/idiomSkills"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (languages) {
    languages.forEach((language) => {
      const lang = document.createElement("p");
      const progressContainer = document.createElement("div");
      const progressContent = document.createElement("div");
      progressContainer.classList.add("progress-container");
      progressContent.classList.add("progress-content");
      progressContent.style.width = `${language.percent}%`;
      progressContent.innerText = `${language.percent}%`;
      progressContainer.appendChild(progressContent);
      lang.innerText = `${language.language}`;
      langContainer.appendChild(lang);
      langContainer.appendChild(progressContainer);
    });
  });

fetch(
  "https://my-json-server.typicode.com/jordie-droid/portfoliodatabase/computerSkills"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (technos) {
    technos.forEach((techno) => {
      const technoContainer = document.createElement("div");
      technoContainer.classList.add("techno-container");
      const imageSkill = document.createElement("img");
      imageSkill.src = techno.logo;
      const title = document.createElement("p");
      title.innerText = techno.designation;
      technoContainer.append(imageSkill, title);
      containerTechno.appendChild(technoContainer);
    });
  });

const projectsContainer = document.querySelector(
  ".projects__projects-container"
);

fetch("https://jp-backoffice.herokuapp.com/api/projects/")
  .then(function (response) {
    return response.json();
  })
  .then(function (projects) {
    projects.result.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("projects-container__card");
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("card__image-container");
      const projectImage = document.createElement("img");
      projectImage.src = project.IMAGE;
      projectImage.alt = project.NAME;
      const projectDescription = document.createElement("div");
      projectDescription.classList.add("card__description");
      projectDescription.classList.add("p10");
      const projectName = document.createElement("h3");
      projectName.innerText = project.NAME;
      const descriptionText = document.createElement("p");
      descriptionText.innerText = project.DESCRIPTION;
      projectDescription.append(projectName, descriptionText);
      imageContainer.append(projectImage);
      projectCard.append(imageContainer, projectDescription);
      projectsContainer.appendChild(projectCard);
    });
  });
