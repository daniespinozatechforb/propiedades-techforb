import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, input, output, signal } from '@angular/core';

export interface SelectOption {
  value: string | number; 
  label: string;         
}

@Component({
  selector: 'app-select',
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  fieldStandard=input<boolean>(false);
  @Input() placeholder: string = 'Selecciona una opción';
  @Input() options: string[] = [];
}
