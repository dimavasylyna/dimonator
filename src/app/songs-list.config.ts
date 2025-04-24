import { transliterate } from './utils/translit.util';

type StreamingPlatform = 'spotify' | 'amazon' | 'youtube' | 'apple';

export interface SongView {
  songName: string,
  urlSlug: string,
  iframeLink: string,
  links: SongLink[]
}

export interface SongLink {
  title: string,
  url: string,
  streamingPlatform: StreamingPlatform,
}

// Інтерфейс для майбутніх релізів
export interface UpcomingRelease {
  songName: string;
  releaseDate: string; // Формат: "DD.MM.YYYY" або "Q2 2024" тощо
  description?: string;
}

interface RawSong {
  songName: string,
  iframeLink: string,
  links: SongLink[]
}

const createSongsList = (): SongView[] => {
  const songs: RawSong[] = [
    {
      songName: 'Старий друг',
      iframeLink: 'https://open.spotify.com/embed/track/488Wzuhig59SR4SlvQ1lhR?utm_source=generator&theme=0',
      links: [
        {
          title: 'Spotify',
          url: 'https://open.spotify.com/album/4WadjJGHEpRUqDtNRY0WE3?si=SW68llGoTLiRmtTHrS7jDQ',
          streamingPlatform: 'spotify'
        },
        {
          title: 'Apple Music',
          url: 'https://music.apple.com/ua/album/%D1%81%D1%82%D0%B0%D1%80%D0%B8%D0%B9-%D0%B4%D1%80%D1%83%D0%B3/1807182616?i=1807182617&l=uk',
          streamingPlatform: 'apple'
        },
        {
          title: 'YouTube',
          url: 'https://music.youtube.com/watch?v=cCMK_zvHctY&si=PQI-jZ3Nf3r1LBOe',
          streamingPlatform: 'youtube'
        },
        {
          title: 'Amazon',
          url: 'https://music.amazon.com/tracks/B0F3ZW64LW?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_RmC2BZDU7IuWHhqbCPe4KCgKQ',
          streamingPlatform: 'amazon'
        },
      ]
    },
    {
      songName: 'Не та країна',
      iframeLink: 'https://open.spotify.com/embed/track/1Imx77z51V3rXeCMRETGV6?utm_source=generator&theme=0',
      links: [
        {
          title: 'Spotify',
          url: 'https://open.spotify.com/track/1Imx77z51V3rXeCMRETGV6?si=b49556065827420f',
          streamingPlatform: 'spotify'
        },
        {
          title: 'Apple Music',
          url: 'https://music.apple.com/ru/song/%D0%BD%D0%B5-%D1%82%D0%B0-%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/1809714721',
          streamingPlatform: 'apple'
        },
        {
          title: 'YouTube',
          url: 'https://music.youtube.com/watch?v=v3jwxTPpPCk&si=OTatBrVNc8McSSuj',
          streamingPlatform: 'youtube'
        },
        {
          title: 'Amazon',
          url: 'https://music.amazon.com/tracks/B0F5DDNWWC?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_c0EiL9jLte2hcitJkBZK38rSr',
          streamingPlatform: 'amazon'
        },
      ]
    },
  ];

  // Додаємо urlSlug на основі транслітерації для кожної пісні
  return songs.map(song => ({
    ...song,
    urlSlug: transliterate(song.songName)
  }));
};

// Список майбутніх релізів
export const UPCOMING_RELEASES: UpcomingRelease[] = [
  {
    songName: 'Дім, що чекає...',
    releaseDate: '19.05.2025',
    description: 'Чекайте на всіх стрімінгових платформах'
  },
];

export const SONG_LIST: SongView[] = createSongsList();
