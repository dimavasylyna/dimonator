import { Component } from '@angular/core';
import { UpcomingRelease, UPCOMING_RELEASES } from '../../songs-list.config';

@Component({
  selector: 'app-upcoming-releases',
  standalone: true,
  templateUrl: './upcoming-releases.component.html',
  styleUrl: './upcoming-releases.component.scss'
})
export class UpcomingReleasesComponent {
  upcomingReleases: UpcomingRelease[] = UPCOMING_RELEASES;
} 