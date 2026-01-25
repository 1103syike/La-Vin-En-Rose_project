import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-main',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl:'home-main.component.html',
  styleUrls:['home-main.component.css'],
  imports: [NgOptimizedImage],
})
export class HomeMainComponent {}
