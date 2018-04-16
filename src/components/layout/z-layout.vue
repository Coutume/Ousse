<template>
    <div id="fluid-container">
        <div id="header">
            <div id="header-container">
                <z-header></z-header>
            </div>
            <div id="MainPage">
                <div class="MainPageContent">
                    <slot></slot>
                </div>
            </div>
            <v-progress-linear v-if="$store.state.loading" class="z-progress" :indeterminate="true"></v-progress-linear>
        </div>
        <v-snackbar
                :timeout="0"
                :top="true"
                color="error"
                :multi-line="false"
                v-model="$store.state.erreur.etat"
        >
            {{ $store.state.erreur.libelle }}
            <v-btn dark flat @click.native="$store.commit('toggleErreur', {etat: false})">Fermer</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import ZHeader from './z-header'
export default {
  name: 'z-layout',
  components: {ZHeader},
  data () {
    return {
      y: 'top',
      x: null,
      mode: ''
    }
  }
}
</script>

<style>
    #fluid-container {
        height: 100%;
        width: 100%;
    }

    #header {
        display: flex;
        flex-flow: column;
        height: 100%;
    }

    #MainPage {
        display: flex;
        height: 100%;
    }

    #MainPage .MainPageContent {
        width: 100%;
        height: 100%;
    }

    #header-container {
        z-index: 1;
    }
    .z-progress
    {
        margin: 0;
    }
</style>
