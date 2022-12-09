/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const initiatorDrawer = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this.drawer_toggle(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this.drawer_close(event, drawer);
    });
  },

  drawer_toggle(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  drawer_close(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

};

export default initiatorDrawer;
