import { Component } from '@angular/core';
import SwiperCore, { EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([EffectFade, IonicSlides]);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
