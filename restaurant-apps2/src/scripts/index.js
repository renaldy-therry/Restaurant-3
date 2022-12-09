/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import WebApp from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw.register';

const appWeb = new WebApp({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('#restaurant'),
});

window.addEventListener('hashchange', () => {
  appWeb.renderPage();
});

window.addEventListener('load', () => {
  appWeb.renderPage();
  swRegister();
});
