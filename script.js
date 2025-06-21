
// Download button

function downloadFile(){
  const link = document.createElement('a');

  link.href = 'Profile/Harsh Resume.pdf';

  link.download = 'Harsh Resume.pdf';

  document.body.appendChild(link);
  link.click();
}


// Simple animation for skill bars when they come into view



const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver((entries)=> {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = '0';
      setTImeout (() => {
        entry.target.style.width = width;
      }, 100);
    }
  });
}, {thershold: 0.5});

skillBars.forEach(bar => {
  observer.observe(bar);
});

//smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behaviour: 'smooth'
    });
  });
});