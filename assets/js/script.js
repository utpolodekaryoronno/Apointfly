$(document).ready(function(){
  $('.menu-bar').click(function(){
		$('.menu').animate({
			width: 'toggle'
		});
	
	});
	
  // aos Plugin
  AOS.init();

  // owlCarousel
  $('.apps').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      767:{
        items:4
      }
    }
  })

  // mixitup plugin
  var containerEl = document.querySelector('.mixitup-main'); 
  var mixer = mixitup(containerEl, {
      load: {
        filter: 'all'
    },
    animation: {
          effectsIn: 'fade translateY(-100%)',
          effects: 'fade translateZ(-100px)'
      }
  });

  
});
// pricing-page
// changing-price-yearly
const toggleBtn = document.querySelector("#switchBtn");
const priceChange = document.querySelector("#priceYearly");
const monthChange = document.querySelector("#perMonthly");
toggleBtn.addEventListener('change', function(){
 if (this.checked) {
   priceChange.innerText = "$99"
   monthChange.innerText = "per year"
 } else {
   priceChange.innerText = "$9"
   monthChange.innerText = "per month"
 }
 return false
});
