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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'PT Sans', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');



</style>
