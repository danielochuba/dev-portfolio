const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.menuItem');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hambug-menu');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    body.classList.remove('none-scroll');
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.setAttribute('style', 'display: block !important');
    body.classList.add('none-scroll');
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.remove('none-scroll');
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const workCards = [
  {
    id: 1,
    title: 'House Booking',
    canopy: ['Render', 'Full-stack Dev', '2023'],
    dot: './img/Counter.png',
    class: 'section-label',
    para1: 'Add, book and delete Houses of your choice.',
    description: 'House Booking is a web application that allows users to book a house for a specific period of time. The user can see the list of houses available and book one of them. The user can also see the list of bookings he/she made and cancel them if he/she wants to. The user can also see the list of bookings made by other users.',
    para2: 'House Booking is a web application that allows users to book a house for a specific period of time. The user can see the list of houses available and book one of them. The user can also see the list of bookings he/she made and cancel them if he/she wants to. The user can also see the list of bookings made by other users.',
    tech: ['Ruby', 'Ruby on Rails', 'React', 'JavaScript', 'HTML', 'CSS'],
    imageMob: 'Images/projects/houses.png',
    imageDesk: 'Images/projects/houses.png',
    live: 'https://house-booking-bbvc.onrender.com',
    source: 'https://github.com/danielochuba/house_booking_backend',
  },
  {
    id: 2,
    title: 'DUO Budget',
    canopy: ['Render', 'Full-stack Dev', '2023'],
    dot: './img/Counter.png',
    class: 'desk-content',
    para1: 'Allows you to keep track of your expenses.',
    description: 'DUO Budget is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    para2: 'DUO Budget is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    tech: ['Ruby on Rails', 'Ruby', 'Tailwind', 'PostgreSQL'],
    imageMob: 'Images/projects/budget3.png',
    imageDesk: 'Images/projects/budget3.png',
    live: 'https://rails-0za3.onrender.com/',
    source: 'https://github.com/danielochuba/budget-app',
  },
  {
    id: 3,
    title: 'Space Travelers Hub',
    canopy: ['Netlify', 'Frontend Dev', '2023'],
    dot: './img/Counter.png',
    class: 'section-label',
    para1: 'A web app that works with the real live data from the SpaceX API',
    description: 'Space Travelers Hub is a SPA web app that works with the real live data from the SpaceX API, built for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    para2: "Space Travelers' Hub is a SPA web app that works with the real live data from the SpaceX API, built for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    tech: ['React', 'Redux', 'JavaScript', 'API', 'Bootstrap', 'CSS', 'HTML'],
    imageMob: 'Images/projects/space_hub.png',
    imageDesk: 'Images/projects/space_hub.png',
    live: 'https://glittery-banoffee-8b560a.netlify.app/',
    source: 'https://github.com/danielochuba/space-travelers-hub',
  },
  {
    id: 4,
    title: 'Conference Page',
    canopy: ['Github', 'Frontend Dev', '2023'],
    dot: './img/Counter.png',
    class: 'desk-content',
    para1: 'A conference web page which contains two pages (HOME and ABOUT).',
    description: 'A conference web page which contains two pages (HOME and ABOUT), displays speakers along with there pictures, titles and achievements.',
    para2: 'A conference web page which contains two pages (HOME and ABOUT), displays speakers along with there pictures, titles and achievements. ',
    tech: ['HTML', 'CSS', 'JavaScript', 'Github', 'Bootstraps'],
    imageMob: 'Images/projects/conference.png',
    imageDesk: 'Images/projects/conference.png',
    live: 'https://danielochuba.me/conference-page/',
    source: 'https://github.com/danielochuba/conference-page',
  },
];

// HANDLES PROJECTS DISPLAY
const sectionLabel = document.getElementById('work');

workCards.forEach((item2) => {
  sectionLabel.innerHTML += `
<div class="${item2.class}">
<img class="portfolios" src="${item2.imageMob}" alt="card1">
<img class="desk-img" src="${item2.imageDesk}" alt="card1">
<div class="label-inside">
<h2 class="section-title">${item2.title}</h2>
<div class="section-options">
<h3 class="optionBold">${item2.canopy[0]}</h3>
<span class="dot"></span>
<h3 class="options">${item2.canopy[1]}</h3>
<span class="dot"></span>
<h3 class="options">${item2.canopy[2]}</h3>
</div>
<p class="section-text">${item2.para1}</p>
<ul class="section-skills">
<li class="skills">${item2.tech[0]}</li>
<li class="skills">${item2.tech[1]}</li>
<li class="skills">${item2.tech[2]}</li>
</ul>
<a href="javascript:void(0)" class="btn-text see-project" name="${item2.id}">See Project</a>
</div>
</div>
`;
});

// HANDLES MODAL POPUP

sectionLabel.innerHTML += '<div id="popUp" class="popUp hide"></div>';

const seeProject = document.querySelectorAll('.see-project');

const popUp = document.getElementById('popUp');

seeProject.forEach((item) => {
  item.addEventListener('click', () => {
    popUp.classList.add('flex');
    body.classList.add('none-scroll');
    const name = parseInt(item.getAttribute('name'), 10);
    const card = workCards.filter((it) => {
      if (it.id === name) {
        return it;
      }
      return false;
    });

    popUp.innerHTML = `
    <div class="popUp-content">
      <div class="sectionLabel">

        <div class="label-inside">
          <div class="popTitle">
            <h2 class="section-title">${card[0].title}</h2>
            <img class="crossblack" src="./crossblack.png" alt="crossblack" onclick="popUp.classList.toggle('hide'),body.classList.remove('none-scroll'),
            popUp.classList.remove('flex')">
          </div>
          <div class="section-options">
            <h3 class="optionBold">${card[0].canopy[0]}</h3>
            <span class="dot"></span>
            <h3 class="options">${card[0].canopy[1]}</h3>
            <span class="dot"></span>
            <h3 class="options">${card[0].canopy[2]}</h3>
          </div>
          <div class="pop-top">
            <img class="portfolios" src=${card[0].imageMob} alt="card1">
            <img class="desk-img popup-img" src=${card[0].imageDesk} alt="card1">
            <div class="hide-desktop">
              
              <div class="buttonPop flex column">
                <p class="section-text cardParaDesk">${card[0].para2}</p>
                <div class="borderPop"></div>
                <ul class="section-skills">
                ${card[0].tech.map((it) => `<li class="skills">${it}</li>`).join('')}
                </ul>
                <div class="buttonPop">
                  <a href="${card[0].live}" target="_blank" class="btn-text" name="1">See live <img class="imgButton" src="./live.png" alt="live" width="24"></a>
                  <a href="${card[0].source}" target="_blank" class="btn-text" name="1">See Source <img class="imgButton" src="./IconGitHub.png" alt="IconGitHub" width="24"></a>
                </div>
              </div>
            </div>
           
          </div>
            <div class="deskColum hide-mobile">
              <p class="section-text cardParaMob">${card[0].description}</p>
            
              <div class="sectionFlex ">
                <ul class="section-skills">
                ${card[0].tech.map((it) => `<li class="skills">${it}</li>`).join('')}
                </ul>
                <div class="borderPop"></div>
                <div class="buttonPop">
                  <a href="${card[0].live}" class="btn-text" name="1">See live <img class="imgButton" src="./live.png" alt="live" width="24"></a>
                  <a href="${card[0].source}" class="btn-text" name="1">See Source <img class="imgButton" src="./IconGitHub.png" alt="IconGitHub" width="24"></a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
`;
    popUp.classList.toggle('hide');
  });
});

// HANDLES DROP DOWN

const arrows = document.querySelectorAll('.arrow');

const handleArrrowClick = (arrow) => {
  arrow.addEventListener('click', (event) => {
    event.stopPropagation();
    arrow.classList.toggle('down');

    const name = arrow.getAttribute('name');

    const dropDown = document.querySelector(`.${name}`);
    dropDown.classList.toggle('hide');
  });
};

arrows.forEach(handleArrrowClick);
