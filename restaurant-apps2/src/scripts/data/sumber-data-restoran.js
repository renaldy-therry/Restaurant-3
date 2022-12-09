/* eslint-disable no-unused-vars */
import API_ENDPOINT from '../globals/api-endpoint';

class sumberDBResto {
  static async daftarRestoran() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async deskripsiRestoran(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default sumberDBResto;
