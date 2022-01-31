import { Component } from '@angular/core';
import SwiperCore, { EffectFade } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { Style } from '@capacitor/status-bar';

SwiperCore.use([EffectFade, IonicSlides]);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  
}
