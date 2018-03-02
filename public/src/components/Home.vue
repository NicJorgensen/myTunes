<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h1 class="title">myTunes</h1>
      </div>
      <div class="buttons col-sm-12">
        <button class="btn btn-block btn-primary" @click="showItunes = true">iTunes</button>
        <button class="btn btn-block btn-secondary" @click="showItunes = false">myTunes</button>
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
    }
  }
</script>


<style>
  div{
    background-color: rgba(184, 199, 223, 0.7)
  }

  .title{
    font-weight: 900;
    color: white;
  }

  .btn{
    font-weight: 700
  }
</style>