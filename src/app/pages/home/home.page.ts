
import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { HomeSwiperComponent } from './components/home-swiper/home-swiper.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { FooterComponent } from '../../layout/footer/footer.component';



@Component({
    selector: 'app-home',
    
    template: `
    <app-header></app-header>
    <app-home-swiper></app-home-swiper>
    <app-home-main></app-home-main>
    <app-footer></app-footer>
    `,
    imports: [HeaderComponent, HomeSwiperComponent, HomeMainComponent, FooterComponent],
})
export class HomePage { }