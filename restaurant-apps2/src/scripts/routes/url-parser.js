/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const ParserUrl = {
  activeUrlParseCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const Url_Splited = this.splitter_url(url);
    return this.Combiner_Url(Url_Splited);
  },

  activeUrlParseNoCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this.splitter_url(url);
  },

  splitter_url(url) {
    const Splits_Url = url.split('/');
    return {
      resource: Splits_Url[1] || null,
      id: Splits_Url[2] || null,
      verb: Splits_Url[3] || null,
    };
  },

  Combiner_Url(Url_Splited) {
    return (Url_Splited.resource ? `/${Url_Splited.resource}` : '/')
    + (Url_Splited.id ? '/:id' : '')
    + (Url_Splited.verb ? `/${Url_Splited.verb}` : '');
  },
};

export default ParserUrl;
