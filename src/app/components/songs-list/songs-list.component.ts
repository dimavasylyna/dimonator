import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SONG_LIST } from '../../songs-list.config';
import { UpcomingReleasesComponent } from '../upcoming-releases/upcoming-releases.component';

@Component({
  selector: 'app-songs-list',
  imports: [RouterLink, UpcomingReleasesComponent],
  templateUrl: './songs-list.component.html',
  styleUrl: './songs-list.component.scss'
})
export class SongsListComponent {
  songs = SONG_LIST;
} 