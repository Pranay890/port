// Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  document.getElementById('contact-form').reset();
});
