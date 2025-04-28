import { NgIf } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = ''; // Texto del botón (opcional)
  @Input() type: 'primary' | 'filter' | 'search' | 'tab' = 'primary'; // Tipo de botón
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Tamaño
  @Input() disabled: boolean = false; // Estado deshabilitado
  @Input() isActive: boolean = false; // Controla el borde azul
  @Input() icon?: string; // Ícono (ej: 'fa fa-plus')

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
