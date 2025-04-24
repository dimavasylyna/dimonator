import { Routes } from '@angular/router';
import { SongsListPageComponent } from './pages/songs-list-page/songs-list-page.component';
import { SongDetailsPageComponent } from './pages/song-details-page/song-details-page.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';

export const routes: Routes = [
  { path: '', component: SongsListPageComponent },
  { path: 'song/:songSlug', component: SongDetailsPageComponent },
  { path: 'artist', component: ArtistPageComponent },
  { path: '**', redirectTo: '' }
];
