import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layouts/navbar/navbar.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { InputSearchComponent } from '../../../shared/input-search/input-search.component';
import { SelectComponent } from '../../../shared/select/select.component';

@Component({
  selector: 'app-hero',
  imports: [NavbarComponent, ButtonComponent,InputSearchComponent, SelectComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  activeTab: 'buy' | 'rent' = 'buy';
  searchTerm: string = "";

  setActiveTab(tab: 'buy' | 'rent') {
    this.activeTab = tab;
    if (tab === 'buy') {
      console.log("estoy ejecutando " + tab);
    } else {
      console.log("estoy ejecutando " + tab);
    }
  }

  search() {
    console.log("se envian los resultados");
  }
  
}
