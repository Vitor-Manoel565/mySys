import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor() {}

  doRefresh(event) {
    console.log('Inicio da operação refresh');

    setTimeout(() => { //tempo do refresh 3000 milisegundos
      console.log('Fim da operação refresh');
      event.target.complete();
    }, 3000);
  }

}
