<template>
  <div id="app">
   
    <HeaderComp/>
    <MainComp/>
    <FooterComp/>
  </div>
</template>

<script>

// Head 
import HeaderComp from './components/HeaderComp.vue';


// Main 
import MainComp from './components/MainComp.vue';


// Foot 
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
}
}
</script>

<style lang="scss">

</style>
