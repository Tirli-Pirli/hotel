import './assets/style/app.scss';
import './assets/images/facebook.svg';
import './assets/images/mastercard.svg';
import './assets/images/flake.svg';
import './assets/images/wifi.svg';
import './assets/images/tv.svg';
import './assets/images/safe.svg';
import './assets/images/minibar.svg';
import './assets/images/phone.svg';
import './assets/images/kitchen.svg';
import './assets/images/towel.svg';
import './assets/images/tub.svg';
import './index.hbs';
import './theHotel.hbs';
import './restaurant.hbs';
import './assets/images/pillows.jpg';
import './assets/images/pi.jpg';
import './assets/images/superior.jpg';
import './assets/images/pencackes.jpg';
import './assets/images/burgerfood.jpg';
import './assets/images/salads.jpg';
import './assets/images/pizza.jpg';
import './assets/images/chairs.jpg';
import './assets/images/room.jpg';
import './assets/images/palms.jpg';
import './assets/images/newmnu.svg';


var mySwiper1 = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      1000: {
        slidesPerView: 3,
      },
      630: {
        slidesPerView: 2
      },
      730: {
        slidesPerView: 3
      },
      330: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    },


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

