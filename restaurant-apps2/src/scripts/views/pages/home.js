/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
import sumberDBResto from '../../data/sumber-data-restoran';
import {buatItemResto} from '../templates/template-halaman-resto';

const Home = {
  async render() {
    return `
    <section class="resto-content">
        <section class="resto-list">
            <div class="grid-card"></div>
        </section>
    </section>
      `;
  },

  async afterRender() {
    const heroBanner = document.querySelector('.hero-banner');
    heroBanner.style.display = 'flex';
    const restaurants = await sumberDBResto.daftarRestoran();
    const containerRestaurants = document.querySelector('.grid-card');
    restaurants.forEach((restaurant) => {
      containerRestaurants.innerHTML += buatItemResto(restaurant);
    });
  },
};

export default Home;
