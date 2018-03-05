<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-sm-12 text-center black">
        <img src="./assets/myTunes_logo.jpg">
      </div>
      <div class="buttons col-sm-12">
        <button class="btn btn-block btn-primary" @click="showItunes = true">iTunes</button>
        <button class="btn btn-block btn-secondary" @click="showItunes = false, getMyTunes()">myTunes</button>
      </div>
    </div>

    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <itunes v-if="showItunes == true" class="itunes"></itunes>
    <my-tunes v-if="showItunes == false" class="my-tunes"></my-tunes>
  </div>
</template>

<script>
  import MyTunes from './MyTunes.vue'
  import Itunes from './Itunes.vue'
  export default {
    name: 'home',
    data() {
      return {
        showItunes: true
      }
    },
    components: {
      Itunes,
      MyTunes
    },
    methods: {
      getMyTunes() {
        this.$store.dispatch('getMyTunes')
      }
    }
  }
</script>


<style scoped>
  div {
    background-color: rgb(183, 199, 224);
  }

  .black {
    background-color: black
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
    background: linear-gradient(to top, rgb(183, 199, 224), black)
  }

  .btn-block {
    height: 50px;
    width: 40%;
    font-family: work sans;
    font-size: 25px
  }
</style>