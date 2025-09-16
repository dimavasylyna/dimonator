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
      songName: 'Тіньогрив',
      iframeLink: 'https://open.spotify.com/embed/track/42X5OHAI6aADnkhCfGGDSy?utm_source=generator&theme=0',
      links: [
        {
          title: 'Офіційний кліп',
          url: 'https://youtu.be/CucE5zutpCk?si=I24xdft_SnDxCLOg',
          streamingPlatform: 'youtube'
        },
        {
          title: 'Spotify',
          url: 'https://open.spotify.com/track/42X5OHAI6aADnkhCfGGDSy',
          streamingPlatform: 'spotify'
        },
        {
          title: 'Apple Music',
          url: 'https://music.apple.com/us/song/%D1%82%D1%96%D0%BD%D1%8C%D0%BE%D0%B3%D1%80%D0%B8%D0%B2/1837818215',
          streamingPlatform: 'apple'
        },
        {
          title: 'YouTube',
          url: 'https://music.youtube.com/watch?v=OMitNg05M-E&si=upjHSpOQCwVFKS8h',
          streamingPlatform: 'youtube'
        },
        {
          title: 'Amazon',
          url: 'https://music.amazon.com/tracks/B0FPV91LG6?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=NL&ref=dm_sh_1BrrItbzvgQOlCqREHjes5keX',
          streamingPlatform: 'amazon'
        },
      ]
    },
    {
      songName: 'Між смертю і тобою',
      iframeLink: 'https://open.spotify.com/embed/track/66OgavwNIKv9MQNoU3KwHD?utm_source=generator&theme=0',
      links: [
        {
          title: 'Офіційний кліп',
          url: 'https://youtu.be/6DGb6g5mRAs?si=Q-o90sB0gcPBC7sS',
          streamingPlatform: 'youtube'
        },
        {
          title: 'Spotify',
          url: 'https://open.spotify.com/track/66OgavwNIKv9MQNoU3KwHD',
          streamingPlatform: 'spotify'
        },
        {
          title: 'Apple Music',
          url: 'https://music.apple.com/us/album/%D0%BC%D1%96%D0%B6-%D1%81%D0%BC%D0%B5%D1%80%D1%82%D1%8E-%D1%96-%D1%82%D0%BE%D0%B1%D0%BE%D1%8E-single/1832834975',
          streamingPlatform: 'apple'
        },
        {
          title: 'YouTube',
          url: 'https://music.youtube.com/watch?v=jYEkYutCUyw&si=4B2my1DpvgqNfkF2',
          streamingPlatform: 'youtube'
        },
        {
          title: 'Amazon',
          url: 'https://music.amazon.com/tracks/B0FLFH6FCW?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=NL&ref=dm_sh_bdLTEPKeGFMNfJzvuOjCpGAv3',
          streamingPlatform: 'amazon'
        },
      ]
    },
    {
      songName: 'Дім, що чекає... (Gothic Metal Version)',
      iframeLink: 'https://open.spotify.com/embed/track/5vRsnIvEBjGnFqIa0MaN7p?utm_source=generator&theme=0',
      links: [
        {
          title: 'Spotify',
          url: 'https://open.spotify.com/track/5vRsnIvEBjGnFqIa0MaN7p',
          streamingPlatform: 'spotify'
        },
        {
          title: 'Apple Music',
          url: 'https://music.apple.com/us/song/%D0%B4%D1%96%D0%BC-%D1%89%D0%BE-%D1%87%D0%B5%D0%BA%D0%B0%D1%94-gothic-metal-version/1831209697',
          streamingPlatform: 'apple'
        },
        {
          title: 'YouTube',
          url: 'https://music.youtube.com/watch?v=ONCblphf_9g&si=Vg-6iD8CVW-eqqO7',
          streamingPlatform: 'youtube'
        },
        {
          title: 'Amazon',
          url: 'https://music.amazon.com/albums/B0FL4RGRR5?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=NL&ref=dm_sh_hEyqhMEb5DX8NmPGMy0BxzE4Z',
          streamingPlatform: 'amazon'
        },
      ]
    },
    {
      songName: 'Дім, що чекає...',
      iframeLink: 'https://open.spotify.com/embed/track/3WPJm0R1nrUS9L2iZ82FKx?utm_source=generator&theme=0',
      links: [
        {
          title: 'Spotify',
          url: 'https://open.spotify.com/track/3WPJm0R1nrUS9L2iZ82FKx',
          streamingPlatform: 'spotify'
        },
        {
          title: 'Apple Music',
          url: 'https://music.apple.com/us/song/%D0%B4%D1%96%D0%BC-%D1%89%D0%BE-%D1%87%D0%B5%D0%BA%D0%B0%D1%94-ost-%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%96%D0%B9-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%B5%D1%86%D1%8C/1809577278',
          streamingPlatform: 'apple'
        },
        {
          title: 'YouTube',
          url: 'https://music.youtube.com/watch?v=IVeC68JofZY&si=_buI8hqYhF0dC5fD',
          streamingPlatform: 'youtube'
        },
        {
          title: 'Amazon',
          url: 'https://music.amazon.com/tracks/B0F5BFS4SR?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_UMoBWBMCRhMDSLayRasGEIAdU',
          streamingPlatform: 'amazon'
        },
      ]
    },
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
    songName: 'Кайдани моралі',
    releaseDate: '09.18.2025',
    description: 'Чекайте на всіх стрімінгових платформах'
  },
  {
    songName: 'Вона Ідеальна',
    releaseDate: '01.10.2025',
    description: 'Чекайте на всіх стрімінгових платформах'
  },
  {
    songName: 'Опудало',
    releaseDate: 'Поки невідомо',
    description: 'Чекайте на всіх стрімінгових платформах'
  },
  {
    songName: 'Останній Танець',
    releaseDate: 'Поки невідомо',
    description: 'Чекайте на всіх стрімінгових платформах'
  },
];

export const SONG_LIST: SongView[] = createSongsList();
