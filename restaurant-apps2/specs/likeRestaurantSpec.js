/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { async } from 'regenerator-runtime';
import dbRestoFavorit from '../src/scripts/data/restoran-favorit';
import * as TestFactories from './helpers/testFactories';

describe('Suka Restoran', () => {
  const tambahTombolSuka = () => {
    document.body.innerHTML = '<div id="containerLikeButton"></div>';
  };

  beforeEach(() => {
    tambahTombolSuka();
  });

  it('Menunjukkan tombol suka pada resto yang belum disukai', async () => {
    await TestFactories.tombolSukaResto({ id: 1 });
    expect(document.querySelector('[aria-label="like restaurant"]'))
      .toBeTruthy();
  });

  it('Tidak menunjukkan tombol suka ketika restauran tidak disukai', async () => {
    await TestFactories.tombolSukaResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike restaurant"]'))
      .toBeFalsy();
  });

  it('Dapat Menyukai Restoran', async () => {
    await TestFactories.tombolSukaResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await dbRestoFavorit.dapatDataRestoran(1);
    expect(restaurant).toEqual({ id: 1 });
    dbRestoFavorit.hapusRestoran(1);
  });

  it('Tidak menambah restoran ketika sudah disukai', async () => {
    await TestFactories.tombolSukaResto({ id: 1 });
    await dbRestoFavorit.letakkanRestoran({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await dbRestoFavorit.dapatSemuaDataRestoran()).toEqual([{ id: 1 }]);
    dbRestoFavorit.hapusRestoran(1);
  });

  it('Tidak menambah restoran ketika tidak memiliki id', async () => {
    await TestFactories.tombolSukaResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await dbRestoFavorit.dapatSemuaDataRestoran()).toEqual([]);
  });
});
