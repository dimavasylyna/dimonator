import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongDetailsComponent } from '../../components/song-details/song-details.component';
import { SONG_LIST } from '../../songs-list.config';

@Component({
  selector: 'app-song-details-page',
  imports: [SongDetailsComponent],
  template: '<app-song-details [songName]="songName" />',
  styles: ['']
})
export class SongDetailsPageComponent implements OnInit {
  songName: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('songSlug');
      if (slug) {
        // Шукаємо пісню за slug
        const song = SONG_LIST.find(s => s.urlSlug === slug);
        if (song) {
          this.songName = song.songName;
        } else {
          this.router.navigate(['/']);
        }
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
