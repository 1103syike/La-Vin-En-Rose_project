import { NgOptimizedImage } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from "swiper/element";

register()


@Component({
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-products-swiper',
    templateUrl: 'products-swiper.component.html',
    styleUrls: ['products-swiper.component.css'],
    imports: [NgOptimizedImage],
}) export class ProductsSwiperComponent { }