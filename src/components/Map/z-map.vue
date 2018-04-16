<template>
    <div class="mapBanque">
        <l-map ref="map" :zoom=0 :crs="crs">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-rectangle :key="coffre._id" v-for="coffre in coffres" @click="showContenuCoffre(coffre)" :bounds="[[coffre.mainLocation.x, coffre.mainLocation.z], [coffre.mainLocation.x + 1, coffre.mainLocation.z + 1]]"  :weight="1" :opacity="1.0"></l-rectangle>
        </l-map>
        <z-modal-coffre v-if="showModal" @close="showModal = false">
            <!--
              you can use custom content here to overwrite
              default content
            -->
            <h3 slot="header">custom header</h3>
        </z-modal-coffre>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LRectangle } from 'vue2-leaflet'
import {OusseApi} from '../../api/ousse'
import * as L from 'leaflet'
import {ZCRS} from '../../Utils/crs'
import ZModalCoffre from '../modalCoffre/z-modal-coffre'

export default {
  name: 'z-map',
  components: { ZModalCoffre, LMap, LTileLayer, LMarker, LRectangle },
  data () {
    return {
      zoom: 0,
      crs: ZCRS,
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng([400, 400]),
      coffres: [],
      showModal: false
    }
  },
  mounted: function () {
    this.centerOn(this.banque)
    this.$refs.map.mapObject.on('click', function (ev) {
      let pos = this.$refs.map.mapObject.mouseEventToLatLng(ev.originalEvent)
      this.$store.dispatch('searchAt', {x: Math.floor(pos.lat), z: Math.floor(pos.lng)}).then(response => {
        if (response.length > 0) {
          this.showModal = true
        }
      })
    }, this)
    OusseApi.getCoffres('{"containerType": "CHEST"}').then(response => {
      this.coffres = response.data
    })
  },
  methods: {
    centerOn: function (banque) {
      if (banque != null) {
        let location = banque.mainLocation
        this.$refs.map.mapObject.setView([location.z, location.x])
      }
    },
    showContenuCoffre (coffre) {
      console.log(coffre)
      coffre.content.forEach(function (elem) {
        console.log(elem.id)
      })
      this.$store.commit('setsearchedContainers', [coffre])
      this.showModal = true
    }
  },
  computed: {
    banque: function () {
      return this.$store.state.banqueCourante
    },
    url: function () {
      let location = this.banque.mainLocation
      return 'https://www.zcraft.fr/tuiles/' + location.world + '/{z}/bloc_{x}_{y}.png'
    }
  },
  watch: {
    banque: function (nouvVal, ancVal) {
      this.centerOn(nouvVal)
    }
  }
}
</script>

<style scoped>
.mapBanque
{
    width: 100%;
    height: 100%;
}
</style>
