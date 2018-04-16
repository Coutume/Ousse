<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <z-inv v-for="(container, index) in containers" :key="index" :container="container"></z-inv>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import ZInv from '../containerUi/z-inv'
export default {
  name: 'z-modal-coffre',
  components: {ZInv},
  computed: {
    containers: function () {
      return this.$store.state.searchedContainers
    }
  }
}
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: transparent;
        background-repeat: repeat;
        transition: all .3s ease;
        box-sizing: content-box;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(0.5);
    }
</style>
