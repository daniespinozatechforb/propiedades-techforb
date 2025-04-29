import { NgIf } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: 'menu' | 'filter' | 'search' | 'tab' = 'menu';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() isActive: boolean = false;
  @Input() icon?: string; 

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
