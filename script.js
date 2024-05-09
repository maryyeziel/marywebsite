document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  // You can add your form submission logic here, like sending an AJAX request
  alert('Form submitted!');
});
// Open modal with larger image
function openModal(projectId) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-image');
  
  // Set larger image source based on projectId
  if (projectId === 'project1') {
      modalImage.src = 'project1-full.jpg';
  } else if (projectId === 'project2') {
      modalImage.src = 'project2-full.jpg';
  }
  
  modal.style.display = 'block';
}

// Close modal
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}
// Open case study modal with content
function openCaseStudy(caseStudyId) {
  var modal = document.getElementById('case-study-modal');
  var caseStudyContent = document.getElementById('case-study-content');
  
  // Populate case study content based on caseStudyId
  if (caseStudyId === 'case-study1') {
      caseStudyContent.innerHTML = `
          <h2>Case Study 1</h2>
          <p>This is the content of Case Study 1.</p>
          <!-- Add more detailed content as needed -->
      `;
  } else if (caseStudyId === 'case-study2') {
      caseStudyContent.innerHTML = `
          <h2>Case Study 2</h2>
          <p>This is the content of Case Study 2.</p>
          <!-- Add more detailed content as needed -->
      `;
  }
  
  modal.style.display = 'block';
}

// Close case study modal
function closeCaseStudyModal() {
  var modal = document.getElementById('case-study-modal');
  modal.style.display = 'none';
}
// Filter portfolio items based on category
function filterPortfolio(category) {
  var portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(function(item) {
      if (category === 'all' || item.classList.contains(category)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });

  // Toggle active class on filter buttons
  var filterButtons = document.querySelectorAll('.filter-buttons button');
  filterButtons.forEach(function(button) {
      button.classList.remove('active');
      if (button.textContent.toLowerCase() === category) {
          button.classList.add('active');
      }
  });
}
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
      });
  });
});
// Initialize and add the map
function initMap() {
  // The location of your portfolio
  var portfolioLocation = {lat: 40.7128, lng: -74.0060}; // Example coordinates (New York City)

  // The map, centered at your portfolio location
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: portfolioLocation});

  // The marker, positioned at your portfolio location
  var marker = new google.maps.Marker({position: portfolioLocation, map: map});
}
// Function to show an alert
function showAlert() {
  alert("This is an alert!");
}

// Function to show a confirm dialog
function showConfirm() {
  var result = confirm("Are you sure?");
  if (result) {
      alert("You clicked OK!");
  } else {
      alert("You clicked Cancel!");
  }
}

// Function to show a prompt dialog
function showPrompt() {
  var name = prompt("Please enter your name:", "John Doe");
  if (name != null) {
      alert("Hello, " + name + "! You entered: " + name);
  }
}
