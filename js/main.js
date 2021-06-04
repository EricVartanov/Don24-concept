
//fixed main nav menu

const fxiedNav = $('.main-nav')
const fixedNavLogo = $('.fixed-nav-logo').hide()

$(window).scroll(function(){
    if ($(this).scrollTop() > 220) {
      fxiedNav.addClass('fixed-main-nav'),
      fixedNavLogo.show(500)
    } else {
      fxiedNav.removeClass('fixed-main-nav'),
      fixedNavLogo.hide(500)
}
})


//mobile menu

const secondMenu = $('.menu-second-list').slideToggle(1000)
const menuLinks = $('.mobile-main-nav-links')
const mobileMenuOn = $('.mobile-menu-open')
const mobileMenu = $('.menu-popup').hide()
const mobileMenuoff = $('.mobile-menu-close').hide()

mobileMenuOn.click(function() {
      mobileMenuoff.show()
  mobileMenu.slideToggle(1000)
    mobileMenuOn.hide()
})
mobileMenuoff.click(function() {
      mobileMenuoff.hide()
  mobileMenu.slideToggle(1000)

      mobileMenuOn.show()
})

secondMenu.parent().click(function() {
  secondMenu.slideToggle(1000)
});




//refresh-logo

$('.main-logo').click(function() {
       location.reload();
});


//Search area hide functions 

const searchInput = $('.search-input');
const searchButton = $('.search-button');

searchInput.hide()
searchButton.mouseover(function(){
    $('.fake-search-input').hide()
    searchInput.fadeIn();

})

//animations 


$(document).ready(function animateBG () {
const bgElement1 = $('.sn-bg-element1')


  bgElement1.animate({right: "+=250px", top: "+=300px"}, 5000),
  bgElement1.animate({right: "250px", top: "-=350px"}, 5000),
  bgElement1.animate({right: "-=200px", top: "+=50px"}, 5000) 
  
  setInterval(animateBG, 15000)

})

$(document).ready(function animateBG1 () {
  const bgElement2 = $('.sn-bg-element2')
  
  
    bgElement2.animate({left: "+=450px", bottom: "+=300px"}, 5000),
    bgElement2.animate({left: "450px", bottom: "-=350px"}, 5000),
    bgElement2.animate({left: "-=450px", bottom: "+=50px"}, 5000) 
    
    setInterval(animateBG1, 15000)

  })
  
//Banner slider 
const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
    
      1150: {
        slidesPerView: 1
  
      },
      850: {
        slidesPerView: 1
      },
      770: {
        slidesPerView: 1
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.banner-button-next',
      prevEl: '.banner-button-prev',
    },
    
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    
  });

  //reportage swiper
  const swiper2 = new Swiper('.channel-slider-2', {
    // Optional parameters
    loop: true,
    slidesPerView: 0,
    spaceBetween: 10,
    breakpoints: {
    
      770: {
        slidesPerView: 3
  
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.reportage-button-next',
      prevEl: '.reportage-button-prev',
    },
  });
// End of reportage swiper 

//News episodes swiper  
const swiper3 = new Swiper('.channel-slider-3', {
  // Optional parameters
  loop: true,
  slidesPerView: 0,
  spaceBetween: 10,
  breakpoints: {
    
    770: {
      slidesPerView: 2

    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.news-episodes-button-next',
    prevEl: '.news-episodes-button-prev',
  },
});
// END of News episodes swiper 

// popular programms slider
const swiper4 = new Swiper('.channel-slider-4', {
  // Optional parameters
  loop: true,
  slidesPerView: 0,
  spaceBetween: 10,
  breakpoints: {
    
    
    770: {
      slidesPerView: 3

    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.popular-programms-button-next',
    prevEl: '.popular-programms-button-prev',
  },
});
// END of popular programms slider 

//TVprojects swiper
const swiper5 = new Swiper('.channel-slider-5', {
  // Optional parameters
  loop: true,
  slidesPerView: 0,
  spaceBetween: 10,
  breakpoints: {
    
    1150: {
      slidesPerView: 4

    },
    820: {
      slidesPerView: 3
    },
    770: {
      slidesPerView: 2
    },
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.tvprojects-button-next',
    prevEl: '.tvprojects-button-prev',
  },
});
//en of tvprojects swiper
  
  
  if ($(window).width() <= 770) {
    
    swiper2.destroy();
    swiper3.destroy();
    swiper4.destroy();
    swiper5.destroy();


  };



