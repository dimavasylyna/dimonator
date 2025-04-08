import {Component} from '@angular/core';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-streaming-links',
  imports: [
    IconComponent
  ],
  templateUrl: './streaming-links.component.html',
  styleUrl: './streaming-links.component.scss'
})
export class StreamingLinksComponent {
  readonly links = [
    {title: 'Spotify', url: 'https://...', name: 'spotify'},
    {title: 'Apple Music', url: 'https://...', name: 'apple'},
    {title: 'YouTube', url: 'https://...', name: 'youtube'},
    {title: 'iTunes', url: 'https://...', name: 'itunes'},
    {title: 'Amazon', url: 'https://...', name: 'amazon'},
  ];

  private getIconLink(icon: string) {
    return `assets/icons/${icon}.svg`;
  };
}
