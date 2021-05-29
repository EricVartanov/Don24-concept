//Search area hide functions 

const searchInput = $('.search-input');
const searchButton = $('.search-button');

searchInput.hide()
searchButton.mouseover(function(){
    $('.fake-search-input').hide()
    searchInput.fadeIn();

})

// END of Search area hide functions 

//Banner slider 
const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
  
      
      800: {
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
    slidesPerView: 3,
    spaceBetween: 10,
    
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
  slidesPerView: 2,
  spaceBetween: 10,
  
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
  slidesPerView: 3,
  spaceBetween: 10,
  
  // Navigation arrows
  navigation: {
    nextEl: '.popular-programms-button-next',
    prevEl: '.popular-programms-button-prev',
  },
});
// END of popular programms slider 
  
  
  if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
    swiper2.destroy();
    swiper3.destroy();
    swiper4.destroy();

  };

// end of banner slider 

