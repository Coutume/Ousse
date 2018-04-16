// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {store} from './store/store'
import './Utils/chunk'

// Fichiers CSS nécessaire pour les dépendances
import 'vuetify/dist/vuetify.min.css'
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#2a640f',
    secondary: '#2a640f',
    accent: '#2a640f',
    error: '#2a640f'
  }
})

// eslint-disable-next-line
delete L.Icon.Default.prototype._getIconUrl
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
