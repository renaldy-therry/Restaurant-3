Feature('Menyukai Restoran');

const assert = require('assert');

Scenario('Menampilkan 0 restoran favorit', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('#judul-resto-favorit', 20);
  I.seeElement('#judul-resto-favorit');
  I.waitForElement('.resto-kosong', 20);
  I.see('Tidak ada Restoran yang ditampilkan', '.resto-kosong');
});

Scenario('Menyukai satu restoran', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-kosong', 20);
  I.see('Tidak ada Restoran yang ditampilkan', '.resto-kosong');

  I.amOnPage('/#home');

  I.waitForElement('.resto-item', 20);
  I.seeElement('.resto-item');

  I.waitForElement('.resto-item-judul a', 20);
  I.seeElement('.resto-item-judul a');

  const restoPertama = locate('.resto-item-judul a').first();
  const namaRestoPertama = await I.grabTextFrom(restoPertama);
  I.click(restoPertama);

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-item', 20);
  I.seeElement('.resto-item');

  const favoritedRestoName = await I.grabTextFrom('.resto-item-judul a');
  assert.strictEqual(namaRestoPertama, favoritedRestoName);
});

Scenario('Batal suka restoran', ({ I }) => {
  I.amOnPage('/#home');
  I.waitForElement('.resto-item-judul a', 20);
  I.seeElement('.resto-item-judul a');
  I.click(locate('.resto-item-judul a').first());

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-item-judul a', 20);
  I.seeElement('.resto-item-judul a');
  I.click('.resto-item-judul a');

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-kosong', 20);
  I.see('Tidak ada Restoran yang ditampilkan', '.resto-kosong');
});
