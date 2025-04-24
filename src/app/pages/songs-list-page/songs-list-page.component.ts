import { Component } from '@angular/core';
import { SongsListComponent } from '../../components/songs-list/songs-list.component';

@Component({
  selector: 'app-songs-list-page',
  imports: [SongsListComponent],
  template: '<app-songs-list />',
  styles: ['']
})
export class SongsListPageComponent {}
