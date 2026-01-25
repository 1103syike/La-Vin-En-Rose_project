import { Component } from "@angular/core";
import { HeaderComponent } from "../../layout/header/header.component";
import { ProductsSwiperComponent } from "./components/products-swiper/products-swiper.component";
import { ProductsMainComponent } from "./components/products-main/products-main.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
    selector: '',
    template: `
    <app-header></app-header>
    <app-products-swiper></app-products-swiper>
    <app-products-main></app-products-main>
    <app-footer></app-footer>
    
    `,
    imports: [HeaderComponent, ProductsSwiperComponent, ProductsMainComponent, FooterComponent]
}) export class ProductsPage { }