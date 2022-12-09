/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';

const buatDetailResto = (restaurant) => `
<div class = "resto-desc">
<h2 class="nama-resto-deskripsi" tabindex="0">${restaurant.name}</h2>
  <div class="info-lengkap-resto">
  <img class="resto-flyer" src="${CONFIG.BASIS_URL_GAMBAR + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0"/>
    <div class="info-resto" tabindex="0">
      <h3>Information</h3>
      <h4>Name of Restaurant</h4>
      <p>${restaurant.name}</p>
      <h4>Addres</h4>
      <p>${restaurant.address}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>⭐️${restaurant.rating}</p>
    </div>
  </div>
  <div class="deskripsi-resto" tabindex="0">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
</div>
`;

const buatItemResto = (restaurant) => `
<article class="resto-item">
<img class="resto-item-thumbnail lazyload"
     data-src="${CONFIG.BASIS_URL_GAMBAR + restaurant.pictureId}"
     alt="${restaurant.name} restaurant" tabindex="0">
<div class="resto-item-content">
<h1 class="resto-item-judul"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
<p class="resto-item-city" tabindex="0">
  ${restaurant.city}</p>
  <p><span class=resto-rating>&#9733;</span>${restaurant.rating}
  </p>
  <p class="resto-item-description" tabindex="0">${restaurant.description}</p>
</article>
`;

const buatDaftarMakananResto = (foods) => {
  let text = `
    <div class = "resto-catalog" tabindex="0">
    <h4>Foods</h4>
    <ul class = "menu-catalogue">
  `;
  foods.forEach((food) => {
    text += `<li>${food.name}</li>`;
  });
  text += `
  </ul>
  </div>
  `;

  return text;
};

const buatDaftarMinumanResto = (drinks) => {
  let text = `
    <div class = "resto-catalog" tabindex="0">
    <h4>Drinks</h4>
    <ul class = "menu-catalogue">
  `;
  drinks.forEach((drink) => {
    text += `<li>${drink.name}</li>`;
  });
  text += `
  </ul>
  </div>
  `;

  return text;
};

const buatDaftarReviewResto = (customerReviews) => {
  let text = `
  <h3 class ="resto-review-title" tabindex="0">Review</h3>
  <div class = "ulasan-resto" tabindex="0">
  `;
  customerReviews.forEach((review) => {
    text += `
    <div class = "container-ulasan" tabindex="0">
    <p class= "nama-pengulas">${review.name}</p>
    <p class= "tanggal-ulasan">${review.date}</p>
    <p>review :</p>
    <p class= "deskripsi-ulasan">${review.review}</p>
    <br>
    </div>
  `;
  });
  text += `
  </div>`;
  return text;
};

const buatTombolSuka = () => `
  <button id="likeButton" aria-label="like restaurant" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const buatTombolDisukai = () => `
  <button id="likeButton" aria-label="unlike restaurant" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const tampilanKosong = () => `
<div class="resto-kosong">Tidak ada Restoran yang ditampilkan</div>
`;

export {
  buatDetailResto,
  buatItemResto,
  buatDaftarMakananResto,
  buatDaftarMinumanResto,
  buatDaftarReviewResto,
  buatTombolSuka,
  buatTombolDisukai,
  tampilanKosong,
};
