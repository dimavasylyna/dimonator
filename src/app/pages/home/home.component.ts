import { Component } from '@angular/core';

import {StreamingLinksComponent} from '../../components/streaming-links/streaming-links.component';
import {PreviewComponent} from '../../components/preview/preview.component';

@Component({
  selector: 'app-home',
  imports: [
    StreamingLinksComponent,
    PreviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
