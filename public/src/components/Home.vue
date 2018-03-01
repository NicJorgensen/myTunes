<template>
  <div class="home">
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
  data () {
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
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: green;
}

.itunes{
  display: inline-block;
  background: red;
  min-height: 500px;
  min-width: 45%;
}

</style>
