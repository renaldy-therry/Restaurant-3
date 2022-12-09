/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const workbox = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await workbox.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
