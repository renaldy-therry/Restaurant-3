/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
import {openDB} from 'idb';
import CONFIG from '../globals/config';

const {NAMA_DATABASE, VERSI_DATABASE, NAMA_OBJECT} = CONFIG;

const promiseDb = openDB(NAMA_DATABASE, VERSI_DATABASE, {
  upgrade(database) {
    database.createObjectStore(NAMA_OBJECT, { keyPath: 'id' });
  },
});

const dbRestoFavorit = {
  async dapatDataRestoran(id) {
    if (!id) {
      return;
    }
    return (await promiseDb).get(NAMA_OBJECT, id);
  },

  async dapatSemuaDataRestoran() {
    return (await promiseDb).getAll(NAMA_OBJECT);
  },

  async letakkanRestoran(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await promiseDb).put(NAMA_OBJECT, restaurant);
  },

  async hapusRestoran(id) {
    return (await promiseDb).delete(NAMA_OBJECT, id);
  },
};

export default dbRestoFavorit;
