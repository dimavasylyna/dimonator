import { Component } from '@angular/core';
import { ArtistPreviewComponent } from '../../components/artist-preview/artist-preview.component';

@Component({
  selector: 'app-artist-page',
  imports: [ArtistPreviewComponent],
  template: '<app-artist-preview />',
  styles: ['']
})
export class ArtistPageComponent {}
