import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { SecurityCalmComponent } from "./security-calm/security-calm.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CarouselComponent, SecurityCalmComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
