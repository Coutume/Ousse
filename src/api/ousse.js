import {HTTP} from './api'

export const OusseApi = {
  getCoffres: function (filtre) {
    return HTTP.get('/minecraft/coffres', {
      params: {
        rep: 'pj', // Plain JSON
        np: '', // no properties
        filter: filtre
      }
    })
  },
  getBanques: function (filtre) {
    return HTTP.get('/minecraft/banques', {
      params: {
        rep: 'pj', // Plain JSON
        np: '', // no properties
        filter: filtre
      }
    })
  }
}
