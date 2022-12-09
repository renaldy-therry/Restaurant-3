/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import CONFIG from '../globals/config';

const HelperCache = {
  async appshellCaching(requests) {
    const cache = await this.cacheOpen();
    cache.addAll(requests);
  },

  async hapusCacheTua() {
    const namaCache = await caches.keys();
    namaCache
      .filter((name) => name !== CONFIG.NAMA_CACHE)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidasiCache(request) {
    const response = await caches.match(request);

    if (response) {
      this.fetch_request(request);
      return response;
    }
    return this.fetch_request(request);
  },

  async cacheOpen() {
    return caches.open(CONFIG.NAMA_CACHE);
  },

  async fetch_request(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this.tambahCache(request);
    return response;
  },

  async tambahCache(request) {
    const cache = await this.cacheOpen();
    cache.add(request);
  },
};

export default HelperCache;
