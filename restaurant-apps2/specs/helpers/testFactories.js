/* eslint-disable object-curly-spacing */
import {async} from 'regenerator-runtime';
import initiatorButtonLike from '../../src/scripts/utils/tombol-suka';

const tombolSukaResto = async (restaurant) => {
  await initiatorButtonLike.init({
    containerLikeButton: document.querySelector('#containerLikeButton'),
    restaurant,
  });
};

export {tombolSukaResto};
