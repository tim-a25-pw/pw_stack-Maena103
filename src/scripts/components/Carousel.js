import Swiper from 'swiper/bundle';
export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      direction: 'vertical',
      slidesPerView: 1,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };

    this.init();
  }
  init() {
    console.log('instance caroussel');
    this.setOption();
    new Swiper(this.element, this.options);
  }

  setOption() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        375: { slidesPerView: 1 },
        500: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1000: { slidesPerView: 3.5 },
      };
    }
    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }
    if ('slides' in this.element.dataset) {
      this.options.slidesPerView =
        this.element.dataset.slides || this.options.slidesPerView;
    }
  }
}
