/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
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

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
      return {
        headers: [
          { text: 'Grade', value: 'grade', align: 'start'},
          { text: 'Type', value: 'type'},
          { text: 'Code', value: 'code'},
          { text: 'Character', value: 'character'},
          { text: 'Description', value: 'description'},
        ],
        members: [
          { grade: 'PA6', type: 'Unfilled', code: 'AGP2002N', character: 'Low Viscosity', description: 'PA6 General Purpose', },
          { grade: 'PA6', type: 'Impact Modified', code: 'AHI2204N', character: 'High Impact Strength', description: 'PA6 Impact Modified', },
          { grade: 'PA6', type: 'Impact Modified', code: 'AHI2254N', character: 'High Impact Strength', description: 'PA6 Impact Modified', },
          { grade: 'PA6', type: 'Reinforced', code: 'AGP1154N', character: 'Rigidity, High Strength', description: 'PA6 Glass Fiber 15% Reinforced', },
          { grade: 'PA6', type: 'Reinforced', code: 'AGP1304N', character: 'Rigidity, High Strength', description: 'PA6 Glass Fiber 30% Reinforced', },
          { grade: 'PA6', type: 'Reinforced', code: 'AGP1334BK', character: 'Rigidity, High Strength', description: 'PA6 Glass Fiber 33% Reinforced', },
          { grade: 'PA6', type: 'Unfilled FR', code: 'AGP2002N-FR', character: 'Low Viscosity', description: 'Heat Resistance', },
          { grade: 'PA6', type: 'Impact Modified FR', code: 'AHI2254N-FR', character: 'High Impact Strength', description: 'Heat Resistance', },
          { grade: 'PA6', type: 'Reinforced FR', code: 'AGP1304N-FR', character: 'Rigidity, High Strength', description: 'Heat Resistance', },

          { grade: 'PA66', type: 'Unfilled', code: 'BGP2005BK', character: 'Low Viscosity', description: 'PA66 General Purpose', },
          { grade: 'PA66', type: 'Reinforced', code: 'BGP1305BK', character: 'Rigidity, High Strength', description: 'PA66 Glass Fiber 30% Reinforced', },
          { grade: 'PA66', type: 'Unfilled FR', code: 'BGP2005BK-FR', character: 'Low Viscosity', description: 'Heat Resistance', },
          { grade: 'PA66', type: 'Reinforced FR', code: 'BGP1305BK-FR', character: 'Rigidity, High Strength', description: 'Heat Resistance', },


        ],
      }
    },
  })

  /*==================== SUSTAINABILITY ACCORDION ====================*/
  const accordionItems = document.querySelectorAll('.sustainability__item')

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.sustainability__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        
        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
  })

  const toggleItem = (item) => {
    const accordionContent = item.querySelector('.sustainability__content')

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

  /*==================== SCROLL SECTION ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

 /*==================== SHOW SCROLL UP ====================*/

 function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__translate`, {delay: 600})
sr.reveal(`.about__img, .contact__box`, {origin: 'left'})
sr.reveal(`.about__data, .contact__form`, {origin: 'right'})
sr.reveal(`.steps__card, .sustainability__group, .footer`, {interval: '100'})