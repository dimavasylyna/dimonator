import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SONG_LIST, SongView, SongLink } from '../../songs-list.config';
import { StreamingLinksComponent } from '../streaming-links/streaming-links.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-song-details',
  imports: [RouterLink, StreamingLinksComponent],
  templateUrl: './song-details.component.html',
  styleUrl: './song-details.component.scss'
})
export class SongDetailsComponent implements OnInit {
  @Input() songName?: string;
  
  song: SongView | undefined;
  safeSrc: SafeResourceUrl | undefined;
  formattedLinks: { name: string, title: string, url: string }[] = [];

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (this.songName) {
      this.song = SONG_LIST.find(s => s.songName === this.songName);
      if (this.song) {
        // Санітизуємо URL для iframe
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.song.iframeLink);
        
        // Перетворюємо формат посилань
        this.formattedLinks = this.formatLinks(this.song.links);
      }
    }
  }

  private formatLinks(links: SongLink[]): { name: string, title: string, url: string }[] {
    return links.map(link => ({
      name: link.streamingPlatform,
      title: link.title,
      url: link.url
    }));
  }
} 