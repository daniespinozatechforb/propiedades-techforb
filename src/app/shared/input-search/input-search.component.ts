import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class InputSearchComponent {
  placeholder = input<string>('Buscar por ubicación o palabra clave...');
  

  @Input() label: string = 'Label';
  @Input() type: string = 'text';
  
}


