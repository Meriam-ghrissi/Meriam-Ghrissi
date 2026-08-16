/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose =document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click' ,()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills() {
    let itemClass = this.parentNode.className;

    // Close all skills
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    // Open the clicked one
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
    }

    skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});






/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')


    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalclick){
    modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click',() =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
 // Initialize Swiper
        let swiperPortfolio = new Swiper('.portfolio__container', {
            // Enable CSS Mode
            cssMode: true,
            loop:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // Enable pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

/*==================== PORTFOLIO MODAL ====================*/
const portfolioViews = document.querySelectorAll('.portfolio__modal'),
    portfolioBtns = document.querySelectorAll('.portfolio__button'),
    portfolioCloses = document.querySelectorAll('.portfolio__modal-close');

let portfolio = function(portfolioClick){
    portfolioViews[portfolioClick].classList.add('active-modal');
};

portfolioBtns.forEach((portfolioBtn, i)=>{
    portfolioBtn.addEventListener('click', ()=>{
        portfolio(i-1);
    });
});

portfolioCloses.forEach((portfolioClose)=>{
    portfolioClose.addEventListener('click', ()=>{
        portfolioViews.forEach((portfolioView)=>{
            portfolioView.classList.remove('active-modal');
        });
    });
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor:true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568:{
            slidesPerView: 2.5,
        }
    }
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight =current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




/*==================== SCROLL HEADER SHADOW ====================*/
const header = document.getElementById('header')
function scrollHeader(){
    if(this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL REVEAL ANIMATION ====================*/
/* Adds a fade/slide-in effect the first time each element enters view */
const revealTargets = document.querySelectorAll(
    '.section__title, .section__subtitle, .home__data, .home__social, .home__img, ' +
    '.about__img, .about__data, .skills__content, .languages__content, ' +
    '.services__content, .portfolio__content, .testimonial__content, ' +
    '.contact__container > div, .contact__form'
)

revealTargets.forEach(el => el.classList.add('reveal'))

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const el = entry.target
            el.classList.add('is-visible')
            revealObserver.unobserve(el)
            // Once the fade/slide-in transition finishes, drop the
            // transform entirely (translateY(0) is still a "transform"
            // as far as CSS is concerned, and any transform on an
            // ancestor breaks position:fixed children like the
            // services/portfolio modals). Removing it afterwards keeps
            // the animation while avoiding that side effect.
            setTimeout(() => { el.style.transform = 'none' }, 750)
        }
    })
}, { threshold: 0.15 })

revealTargets.forEach(el => revealObserver.observe(el))


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Get the current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'

// Apply previously chosen theme (if any)
if (selectedTheme) {
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Toggle theme on button click
themeButton.addEventListener('click', () => {
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== CONTACT FORM (EmailJS) ====================*/
/* 1) Replace the 3 placeholders below with the values from your
      EmailJS dashboard (Account > General for the public key,
      Email Services / Email Templates for the other two).
   2) Make sure your EmailJS template uses the same variable names
      as the form fields: {{user_name}}, {{user_email}}, {{project}},
      {{message}}. */
const EMAILJS_PUBLIC_KEY  = 'z7DlFQjludChXMsSB'
const EMAILJS_SERVICE_ID  = 'service_vxbijkc'
const EMAILJS_TEMPLATE_ID = 'template_rnb132d'

if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY)
}

const contactForm = document.getElementById('contact-form')
const contactSubmit = document.getElementById('contact-submit')
const contactStatus = document.getElementById('contact-status')

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault()

        if (typeof emailjs === 'undefined') {
            contactStatus.textContent = 'Could not reach the email service. Please refresh the page and try again, or email me directly.'
            contactStatus.classList.add('contact__status--error')
            return
        }

        const originalLabel = contactSubmit.innerHTML
        contactSubmit.disabled = true
        contactSubmit.innerHTML = 'Sending...'
        contactStatus.textContent = ''
        contactStatus.className = 'contact__status'

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
            .then(() => {
                contactStatus.textContent = 'Message sent successfully! I will get back to you soon.'
                contactStatus.classList.add('contact__status--success')
                contactForm.reset()
            })
            .catch((error) => {
                console.error('EmailJS error:', error)
                contactStatus.textContent = 'Something went wrong. Please try again or email me directly.'
                contactStatus.classList.add('contact__status--error')
            })
            .finally(() => {
                contactSubmit.disabled = false
                contactSubmit.innerHTML = originalLabel
            })
    })
}
