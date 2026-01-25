import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-home-swiper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl:'home-swiper.component.html',
  styleUrls:['home-swiper.component.css'],
  imports: [NgOptimizedImage],
})
export class HomeSwiperComponent {}
