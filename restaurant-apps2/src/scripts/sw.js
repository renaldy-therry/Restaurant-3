/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import HelperCache from './utils/cache-helper';

self.addEventListener('install', (event) => {
  event.waitUntil(HelperCache.cachingAppShell([...assetsToCache]));
  /* Caching Sumber Daya App Shell */
});

self.addEventListener('activate', (event) => {
  event.waitUntil(HelperCache.hapusCacheTua());
  /* Menghapus Cache Lama */
});

self.addEventListener('fetch', (event) => {
  event.respondWith(HelperCache.revalidasiCache(event.request));
  /* Menambah/Mendapat request fetch ke atau dari cache */
});

const assetsToCache = [
  './',
  './icons/192x192.png',
  './icons/256x256.png',
  './icons/384x384.png',
  './icons/512x512.png',
  './index.html',
  './restaurant.png',
  './hero-image_2.jpg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];
