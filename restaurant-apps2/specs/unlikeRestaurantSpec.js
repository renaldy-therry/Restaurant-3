import { async } from 'regenerator-runtime';
import dbRestoFavorit from '../src/scripts/data/restoran-favorit';
import * as TestFactories from './helpers/testFactories';

describe('Tidak menyukai restoran', () => {
  const tambahTombolSuka = () => {
    document.body.innerHTML = '<div id="containerLikeButton"></div>';
  };

  beforeEach(async () => {
    tambahTombolSuka();
    await dbRestoFavorit.letakkanRestoran({ id: 1 });
  });

  afterEach(async () => {
    await dbRestoFavorit.hapusRestoran(1);
  });

  it('menampilkan tombol tidak suka ketika restoran telah disukai', async () => {
    await TestFactories.tombolSukaResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike restaurant"]'))
      .toBeTruthy();
  });

  it('tidak menampilkan tombol suka ketika restoran sudah disukai', async () => {
    await TestFactories.tombolSukaResto({ id: 1 });
    expect(document.querySelector('[aria-label="like restaurant"]'))
      .toBeFalsy();
  });

  it('dapat menghapus restoran yang disukai dari list', async () => {
    await TestFactories.tombolSukaResto({ id: 1 });
    document.querySelector('[aria-label="unlike restaurant"]').dispatchEvent(new Event('click'));
    expect(await dbRestoFavorit.dapatSemuaDataRestoran()).toEqual([]);
  });

  it('tidak menaruh(throw) error ketika restoran yang tidak disukai tidak berada di list', async () => {
    await TestFactories.tombolSukaResto({ id: 1 });
    await dbRestoFavorit.hapusRestoran(1);
    document.querySelector('[aria-label="unlike restaurant"]').dispatchEvent(new Event('click'));
    expect(await dbRestoFavorit.dapatSemuaDataRestoran()).toEqual([]);
  });
});
