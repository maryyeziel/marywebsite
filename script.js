

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Handle form submission
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Replace this with actual form submission logic (e.g., sending an email)
    alert('Your message has been sent!');
    // Clear the form fields after submission
    this.reset();
  });
  function openModal(projectId) {
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");
    modal.style.display = "block";
    // Set project details dynamically based on projectId
    if (projectId === 1) {
      modalTitle.innerText = "Project 1";
      modalDescription.innerText = "Description of Project 1";
    } else if (projectId === 2) {
      modalTitle.innerText = "Project 2";
      modalDescription.innerText = "Description of Project 2";
    }
    // Add more cases for additional projects
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Handle form submission
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Replace this with actual form submission logic (e.g., sending an email)
    alert('Your message has been sent!');
    // Clear the form fields after submission
    this.reset();
  });
  
  // Open modal with project details
  function openModal(projectId) {
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");
    modal.style.display = "block";
    // Set project details dynamically based on projectId
    if (projectId === 1) {
      modalTitle.innerText = "Project 1";
      modalDescription.innerText = "Description of Project 1";
    } else if (projectId === 2) {
      modalTitle.innerText = "Project 2";
      modalDescription.innerText = "Description of Project 2";
    }
    // Add more cases for additional projects
  }
  
  // Close modal
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Open case study modal with details
function openCaseStudyModal(caseStudyId) {
    var modal = document.getElementById("case-study-modal");
    var modalTitle = document.getElementById("case-study-modal-title");
    var modalDescription = document.getElementById("case-study-modal-description");
    modal.style.display = "block";
    // Set case study details dynamically based on caseStudyId
    if (caseStudyId === 1) {
      modalTitle.innerText = "Case Study 1";
      modalDescription.innerText = "Description of Case Study 1";
    } else if (caseStudyId === 2) {
      modalTitle.innerText = "Case Study 2";
      modalDescription.innerText = "Description of Case Study 2";
    }
    // Add more cases for additional case studies
  }
  
  // Close case study modal
  function closeCaseStudyModal() {
    var modal = document.getElementById("case-study-modal");
    modal.style.display = "none";
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    var modal = document.getElementById("case-study-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // Filter projects by category
document.getElementById('category').addEventListener('change', function() {
  var category = this.value;
  var projectThumbnails = document.querySelectorAll('.project-thumbnail');
  
  projectThumbnails.forEach(function(thumbnail) {
    var categories = thumbnail.classList;
    if (category === 'all' || categories.contains(category)) {
      thumbnail.classList.remove('hide');
    } else {
      thumbnail.classList.add('hide');
    }
  });
});
// If you want to add interactivity with JavaScript, for example, you can change the image source dynamically
// For example:
document.addEventListener('DOMContentLoaded', function() {
  var bannerImage = document.querySelector('#banner img');
  // Change the image source
  bannerImage.src = 'new-banner-image.jpg';
});
