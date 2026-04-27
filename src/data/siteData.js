import { FaFacebook, FaInstagram } from "react-icons/fa";

export const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/sanket_ts/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/sanks.ts",
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "mypicks", label: "My Picks" },
  { id: "platforms", label: "Platforms" },
];

export const platforms = [
  { name: "Spotify", type: "Music Streaming", accent: "#1DB954" },
  { name: "Apple Music", type: "Music Streaming", accent: "#FA243C" },
  { name: "YouTube Music", type: "Music Streaming", accent: "#FF0000" },
  { name: "Deezer", type: "Music Streaming", accent: "#FEAA2D" },
  { name: "iTunes", type: "Digital Store", accent: "#FB5BC5" },
  { name: "Tidal", type: "HiFi Streaming", accent: "#000000" },
  { name: "Pandora", type: "Radio Streaming", accent: "#005483" },
  { name: "Amazon Music", type: "Music Streaming", accent: "#00A8E1" },
  { name: "Instagram", type: "Social Platform", accent: "#E1306C" },
  { name: "Facebook", type: "Social Platform", accent: "#1877F2" },
  { name: "TikTok", type: "Social Platform", accent: "#25F4EE" },
  { name: "JioSaavn", type: "Music Streaming", accent: "#1ED760" },
  { name: "Tencent Music", type: "Music Streaming", accent: "#2A5CAA" },
  { name: "Anghami", type: "Music Platform", accent: "#FF4FA3" },
  { name: "Boomplay", type: "Music Streaming", accent: "#F6A800" },
];

export const quickStats = [
  { label: "Monthly Listeners", value: "1.3M+", sub: "across platforms" },
  { label: "Remakes", value: "25+", sub: "and growing" },
  { label: "Streams", value: "10M+", sub: "this year" },
];

export const featuredArtists = [
  {
    name: "Luna K",
    genre: "Dream Pop",
    color: ["#7c3aed", "#818cf8"],
    listeners: "284K",
    tracks: 34,
  },
  {
    name: "Arco Flame",
    genre: "Afrobeats",
    color: ["#dc2626", "#f97316"],
    listeners: "512K",
    tracks: 61,
  },
  {
    name: "Nova Tide",
    genre: "Electronic",
    color: ["#0891b2", "#14b8a6"],
    listeners: "398K",
    tracks: 48,
  },
  {
    name: "Sia Ren",
    genre: "R&B Soul",
    color: ["#be185d", "#a855f7"],
    listeners: "156K",
    tracks: 27,
  },
];

export const PLAYER_DURATION_SECONDS = 240;

export const WAVEFORM_BARS = [
  0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.3, 0.7, 1, 0.6, 0.4, 0.9, 0.5,
];

export const PLAYLIST_WAVE = [
  3, 6, 4, 8, 5, 3, 7, 4, 6, 3, 5, 8, 4, 6, 3, 7, 5, 4, 6, 3, 8, 5, 4, 6,
];

export const ARTIST_WAVE = [3, 5, 8, 6, 4, 7, 5, 3, 6, 4];
