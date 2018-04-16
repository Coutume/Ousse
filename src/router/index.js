import Vue from 'vue'
import Router from 'vue-router'
import {ZMap} from '../components/map'
import {ZStats} from '../components/Stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: ZMap
    },
    {
      path: '/statistiques',
      name: 'Stats',
      component: ZStats
    }
  ]
})
