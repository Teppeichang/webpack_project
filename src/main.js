import 'bootstrap';
import './main.scss';
import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);
import 'swiper/swiper-bundle.css';

const family = new Swiper ('.family', {
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const newBorn = new Swiper ('.new_born', {
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var portrait = new Swiper ('.portrait', {
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var couple = new Swiper ('.couple', {
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});