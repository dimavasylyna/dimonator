import {Component, input} from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly className = input<string>();
}
