
import { NgOptimizedImage } from '@angular/common';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl:'header.component.html',
  styleUrls:['header.component.css'],
  standalone: true,
  imports: [NgOptimizedImage ,RouterLink],
})
export class HeaderComponent {

}
