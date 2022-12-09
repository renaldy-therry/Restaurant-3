/* eslint-disable object-curly-spacing */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

import {async} from 'regenerator-runtime';
import dbRestoFavorit from '../data/restoran-favorit';
import {buatTombolSuka, buatTombolDisukai} from '../views/templates/template-halaman-resto';

/* eslint-disable no-unused-vars */
const initiatorButtonLike = {
  async init({containerLikeButton, restaurant}) {
    this.likeButton = containerLikeButton;
    this.containerRestaurant = restaurant;

    await this.renderTombol();
  },

  async renderTombol() {
    const {id} = this.containerRestaurant;

    if (await this.adaRestoran(id)) {
      this.renderButtonLiked();
    } else {
      this.renderLikeButton();
    }
  },

  async adaRestoran(id) {
    const restaurant = await dbRestoFavorit.dapatDataRestoran(id);
    return !!restaurant;
  },

  renderLikeButton() {
    this.likeButton.innerHTML = buatTombolSuka();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await dbRestoFavorit.letakkanRestoran(this.containerRestaurant);
      this.renderTombol();
    });
  },

  renderButtonLiked() {
    this.likeButton.innerHTML = buatTombolDisukai();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await dbRestoFavorit.hapusRestoran(this.containerRestaurant.id);
      this.renderTombol();
    });
  },
};

export default initiatorButtonLike;
