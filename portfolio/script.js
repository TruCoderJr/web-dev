import './style.css'

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width
    }
  })
}, { threshold: 0.5 })

document.querySelectorAll('.skill-level').forEach(skill => {
  skill.style.width = '0'
  skill.dataset.width = skill.style.width
  observer.observe(skill)
})

// Add scroll animation for timeline items
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.timeline-item').forEach(item => {
  item.style.opacity = '0'
  item.style.transform = 'translateY(20px)'
  item.style.transition = 'all 0.5s ease-out'
  fadeInObserver.observe(item)
})