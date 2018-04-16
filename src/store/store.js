import Vuex from 'vuex'
import {OusseApi} from '../api/ousse'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    banqueCourante: null,
    searchedContainers: null,
    banques: null,
    loading: false,
    erreur: {etat: false, libelle: ''}
  },
  getters: {
    banqueCourante (state, banque) {
      return state.banqueCourante
    },
    listeBanques (state, banques) {
      return state.banques
    },
    chargement (state, banques) {
      return state.loading
    },
    searchedContainers (state, banques) {
      return state.searchedContainers
    }
  },
  mutations: {
    setBanqueCourante (state, banque) {
      console.log(banque)
      state.banqueCourante = state.banques.find(function (element) {
        return element._id === banque
      })
    },
    setListeBanques (state, banques) {
      state.banques = banques
    },
    toggleChargement (state, isLoad) {
      state.loading = isLoad
    },
    toggleErreur (state, args) {
      state.erreur.etat = args.etat
      state.erreur.libelle = args.libelle
    },
    setsearchedContainers (state, coffres) {
      state.searchedContainers = coffres
    }
  },
  actions: {
    getListeBanques (context) {
      context.commit('toggleChargement', true)
      return OusseApi.getBanques().then(function (reponse) {
        context.commit('setListeBanques', reponse.data)

        return reponse.data
      }).catch(function (reject) {
        context.commit('toggleErreur', {etat: true, libelle: 'Impossible de charger les banques'})
      })
        .finally(function () {
          context.commit('toggleChargement', false)
        })
    },
    searchAt (context, position) {
      context.commit('toggleChargement', true)
      return OusseApi.getCoffres('{"mainLocation.x":' + position.x + ', "mainLocation.z":' + position.z + '}').then(function (reponse) {
        context.commit('setsearchedContainers', reponse.data)

        return reponse.data
      }).catch(function (reject) {
        context.commit('toggleErreur', {etat: true, libelle: 'Impossible de récupérer les coffres'})
      })
        .finally(function () {
          context.commit('toggleChargement', false)
        })
    }
  }
})
