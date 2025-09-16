import { Component } from '@angular/core';

interface SocialLink {
  name: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialLinks: SocialLink[] = [
    {
      name: 'youtube',
      url: 'https://www.youtube.com/@dimonator_official/'
    },
    {
      name: 'tiktok',
      url: 'https://www.tiktok.com/@dimonator_official'
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/dimonator_official'
    }
  ];

  currentYear = new Date().getFullYear();
}
