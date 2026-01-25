import { Component } from "@angular/core";
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { NgOptimizedImage } from "@angular/common";
@Component({
    selector: '',
    template: `
    <app-header></app-header>
    <main class="main">
        <header class="main__header">
            <img class="main__banner main__banner--left" ngSrc="/fresh-flower/main/banner-left.jpg" width="940" height="700" alt="" >
            <img class="main__banner main__banner--right" ngSrc="/fresh-flower/main/banner-right.jpg" width="500" height="700" alt="" >
        </header>
        <section class="main__popular">
            <div class="main__label">
                <h2 class="main__title">熱門排行 <span class="pepicons-pop--flower"></span></h2>
                <div class="main__ranking-list">
                    <div class="main__rank">
                        <span class="main__rank-number">1</span>
                        <div class="main__item">
                            <div class="main__block">
                                <img class="main__image" ngSrc="/fresh-flower/main/ranking-01.jpg" width="850" height="850" alt="夢幻卡布奇諾玫瑰花束" priority>
                            </div>
                            <h3 class="main__name">夢幻卡布奇諾玫瑰花束</h3>
                            <p class="main__price">$2,300</p>
                        </div>
                    </div>
                    <div class="main__rank"></div>
                    <div class="main__rank"></div>
                    
                </div>
            </div>
        </section>
        <section class="main__classroom">

        </section>

        <section class="main__bouquet"></section>
        <section class="main__potted"></section>
    </main>
    <app-footer></app-footer>
    `,
    styleUrls: ['fresh-flower.css'],
    imports: [HeaderComponent, FooterComponent, NgOptimizedImage]
}) export class FreshFlowerPage { }