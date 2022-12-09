/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/initiator-drawer';
import ParserUrl from '../routes/url-parser';
import routes from '../routes/routes';

class WebApp {
  constructor({ button, drawer, content }) {
    this.tombol = button;
    this.appDrawer = drawer;
    this.appContent = content;
    this.appShellInitial();
  }

  appShellInitial() {
    DrawerInitiator.init({
      button: this.tombol,
      drawer: this.appDrawer,
      content: this.appContent,
    });
  }

  async renderPage() {
    const url = ParserUrl.activeUrlParseCombiner();
    const page = routes[url];
    const elementSkipLink = document.querySelector('.skip-link');
    elementSkipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#restaurant').focus();
    });
    this.appContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default WebApp;
