import 'bootstrap';
import './main.scss';
import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);
import 'swiper/swiper-bundle.css';

var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
