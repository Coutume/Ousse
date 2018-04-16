<template>
  <div id="app">
    <v-app>
      <z-layout>
        <router-view v-if="this.$store.state.banqueCourante != null"></router-view>
        <div v-else>
          <div v-if="!this.$store.state.loading && !this.$store.state.erreur.etat">Veuillez sélectionner une banque</div>
        </div>
      </z-layout>
    </v-app>
  </div>
</template>

<script>
import {ZLayout} from './components/layout'
export default {
  name: 'App',
  components: {ZLayout},
  mounted: function () {
    // On charge les banques existantes au chargement du composant
    this.$store.dispatch('getListeBanques')
  }
}
</script>

<style>
  html
  {
    overflow-y: auto;
  }
</style>
