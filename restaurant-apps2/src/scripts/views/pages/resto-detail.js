/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import sumberDBResto from '../../data/sumber-data-restoran';
import ParserUrl from '../../routes/url-parser';
import initiatorButtonLike from '../../utils/tombol-suka';
import {
  buatDetailResto,
  buatDaftarMakananResto,
  buatDaftarMinumanResto,
  buatDaftarReviewResto,
} from '../templates/template-halaman-resto';

const Detail = {
  async render() {
    return `
    <div id="container-resto" class="container-resto"></div>
    <div id="containerLikeButton"></div>
  `;
  },

  async afterRender() {
    const heroBanner = document.querySelector('.hero-banner');
    heroBanner.style.display = 'none';
    const url = ParserUrl.activeUrlParseNoCombiner();
    const restaurant = await sumberDBResto.deskripsiRestoran(url.id);
    const {foods, drinks} = restaurant.menus;
    const {customerReviews} = restaurant;
    const containerRestaurant = document.querySelector('#container-resto');
    containerRestaurant.innerHTML += buatDetailResto(restaurant);
    const containerMenu = document.createElement('div');
    containerMenu.setAttribute('class', 'menus-container');
    containerMenu.innerHTML += buatDaftarMakananResto(foods);
    containerMenu.innerHTML += buatDaftarMinumanResto(drinks);
    containerRestaurant.appendChild(containerMenu);
    containerRestaurant.innerHTML += buatDaftarReviewResto(customerReviews);

    // add like button
    initiatorButtonLike.init({
      containerLikeButton: document.querySelector('#containerLikeButton'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
      },

    });
  },
};

export default Detail;
