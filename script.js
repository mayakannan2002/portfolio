
document.getElementById('hamburger').addEventListener('click', function() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
});


const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL', 'Django',"React"];
const skillsList = document.getElementById('skills-list');

skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});
