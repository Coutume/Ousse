<template>
    <v-container fluid class="contBanque">
        <v-layout row>
            <v-flex>
                <v-select class="selectBanque"
                        :items="banques"
                        v-model="banque"
                        label="Chosir une banque"
                        single-line
                        prepend-icon="map"
                        hide-details
                ></v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'z-banque-select',
  data () {
    return {
      banque: null
    }
  },
  computed: {
    ...mapGetters(['banqueCourante', 'listeBanques']),
    banques: function () { // Transforme la liste des banques en liste d'item pour le select
      if (this.$store.state.banques === null) {
        return []
      }
      this.$store.commit('setBanqueCourante', 'Test')
      return this.$store.state.banques.map(function (banque) {
        return {text: banque.libelle, value: banque._id}
      })
    }
  },
  watch: {
    'banque': function (nouvVal, ancVal) {
      this.$store.commit('setBanqueCourante', nouvVal)
    }
  }
}
</script>

<style scoped>
.selectBanque
{
    min-width: 210px;
}
.contBanque
{
    padding-top: 0;
    padding-bottom: 0;
}
</style>
