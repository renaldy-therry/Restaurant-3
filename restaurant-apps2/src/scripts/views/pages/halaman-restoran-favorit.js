/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import dbRestoFavorit from '../../data/restoran-favorit';
import {buatItemResto, tampilanKosong } from '../templates/template-halaman-resto';

const Favorite = {
  async render() {
    return `
    <section class="resto-content">
        <h2 id="judul-resto-favorit" class="title" tabindex="0">Favorite Restaurant</h2>
        <section class="resto-list">
            <div class="grid-card"></div>
        </section>
    </section>`;
  },

  async afterRender() {
    const heroBanner = document.querySelector('.hero-banner');
    heroBanner.style.display = 'none';
    const restaurants = await dbRestoFavorit.dapatSemuaDataRestoran();
    this.showFavResto(restaurants);
  },

  showFavResto(restaurant = []) {
    const restaurantsContainer = document.querySelector('.grid-card');
    const emptyTemplate = tampilanKosong();
    if(restaurant.length){
    restaurant.forEach((resto) => {
      restaurantsContainer.innerHTML += buatItemResto(resto);
    });
  } else {
    restaurantsContainer.innerHTML = emptyTemplate;
  }
  },
};

export default Favorite;
