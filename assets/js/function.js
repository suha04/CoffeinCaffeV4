//Hamburger gomb működése

const hamburger = document.querySelector('#hamburger');
const navDivs = document.querySelectorAll('.navDiv');
const nav = document.querySelector('nav');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    navDivs.forEach(navDiv => navDiv.classList.toggle('active'));
});

// Nav eltűnik görgetésnél
    // media szélesség definiálása
    function isMediaScreen() {
      return window.innerWidth <= 1110}

      // nincs lenyitva a hamburger menü
    function isNavOpened() {
      return !nav.classList.contains('active')}

  // Előző görgetés pozició
  var prevScrollPos = window.pageYOffset;

  // Nav funkció
  function toggleNavVisibility() {
      if (isMediaScreen() && isNavOpened()==true) {
          var currentScrollPos = window.pageYOffset;
          var nav = document.querySelector('nav');

          if (currentScrollPos > prevScrollPos) {
              // Lefele eltűnik
              nav.style.transform = 'translateY(-100%)';
              
              
              
          } else {
              // Felfele megjelenik
              nav.style.transform = 'translateY(0)';
      
          }

          // Görgetés pozició mentése
          prevScrollPos = currentScrollPos;
      }
  }

  // Görgetés figyelése
  window.addEventListener('scroll', function() {
      toggleNavVisibility();
  });

  // Meghívás ha van görgetés
  toggleNavVisibility();


//Carousel

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.imgContent');
  const images = carousel.querySelectorAll('img');
  const text = document.querySelectorAll('.textContent .text');
  const arrows = document.querySelectorAll('.arrow');
  const slideCounter = document.getElementById('slideCounter');
  const totalSlides = document.querySelectorAll('.imgContent img').length;


  let currentIndex = 0;

  showSlide(currentIndex); // Első Slide

  function showSlide(index) {
    images.forEach(function (image, i) {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });

    text.forEach(function (textElement, i) {
      if (i === index) {
        textElement.classList.add('active');
      } else {
        textElement.classList.remove('active');
      }
    });
  }

  function changeSlide(direction) {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    showSlide(currentIndex);
  }


// Carousel nyilak

  arrows.forEach(function (arrow) {
    arrow.addEventListener('click', function () {
      if (this.classList.contains('left')) {
        changeSlide('prev');
      } else if (this.classList.contains('right')) {
        changeSlide('next');
      }
    });
  });
});





//Aktív nav elemek

const navLinks = document.querySelectorAll('#navList a');

// Linkek figyelése klikkhez
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // aktív eltávolítása minden navelemről
    navLinks.forEach(link => link.classList.remove('active'));

    // klikkelt elemek aktívvá tétele
    link.classList.add('active');
  });
});

// első nav elemhez .active, oldaltöltéskor
navLinks[0].classList.add('active');

// aktív elem frissítés görgetésnél
window.addEventListener('scroll', () => {
  // görgetés pozíció
  const scrollPos = window.scrollY;

  // minden nav elem figyelembe vétele
  navLinks.forEach(link => {
    // link hivatkozása
    const anchor = document.querySelector(`[id="${link.hash.slice(1)}"]`);

    // hivatkozás létezik és legalább 90vh-re van-e a felső szélétől
    if (anchor && anchor.getBoundingClientRect().top < window.innerHeight - window.innerHeight * 0.8) {
      // aktív eltávolítása minden navelemről
      navLinks.forEach(link => link.classList.remove('active'));

      // aktív hozzáadása jelenlegi navelemhez
      link.classList.add('active');
    }
  });
});


// Nav offset
  const navbar = document.getElementsByTagName('nav')[0];
  const navbarHeight = navbar.offsetHeight;

  document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);




// Térkép létrehozása
function initMap() {
  // Create a new map instance centered on a specific location
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 47.472808874608226, lng: 19.29439582431373 },
    zoom: 18 // Adjust the zoom level as needed
  });

  // Add any additional map-related functionality or markers here
  var marker = new google.maps.Marker({
    position: { lat: 47.472808874608226, lng: 19.29439582431373 },
    map: map,
    title: 'Kávézó' // You can customize the marker title as needed
  });
}