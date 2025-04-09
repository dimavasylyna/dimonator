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
    {title: 'Spotify', url: 'https://open.spotify.com/album/4WadjJGHEpRUqDtNRY0WE3?si=SW68llGoTLiRmtTHrS7jDQ', name: 'spotify'},
    {title: 'Apple Music', url: 'https://music.apple.com/ua/album/%D1%81%D1%82%D0%B0%D1%80%D0%B8%D0%B9-%D0%B4%D1%80%D1%83%D0%B3/1807182616?i=1807182617&l=uk', name: 'apple'},
    {title: 'YouTube', url: 'https://music.youtube.com/watch?v=cCMK_zvHctY&si=PQI-jZ3Nf3r1LBOe', name: 'youtube'},
    {title: 'Amazon', url: 'https://music.amazon.com/tracks/B0F3ZW64LW?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_RmC2BZDU7IuWHhqbCPe4KCgKQ', name: 'amazon'},
  ];
}
