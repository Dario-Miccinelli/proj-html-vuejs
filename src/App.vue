<template>
  <div id="app">
   
    <HeaderComp :dati="datiHeader"/>
    <MainComp :featuredProd="featuredProd"/>
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
},
data() {
  return {

    datiHeader: [


    {
      tagHeader: "Home",
      
    },
    {
      tagHeader: "Shop"
    },
    {
      tagHeader: "Products"
    },
    {
      tagHeader: "Categories"
    },
    {
      tagHeader: "News"
    },
    {
      tagHeader: "Elements"
    },


    ],

    featuredProd: [
      {
        img: 'black_elegant_leather_jacket-400x520.jpg',
        prodName: 'Black Leather Jacket',
        prodP: 'Men, Jackets, Jeans',
        Price: '$235'

      },
      {
        img: 'black_leather_suit-400x520.jpg',
        prodName: 'Black Leather Suit',
        prodP: 'Men, Jackets',
        Price: '$176'

      },
      {
        img: 'blue_jacket_and_white_stripe_tee-400x520.jpg',
        prodName: 'Blue Jacket & Stripe Tee',
        prodP: 'Men, Jackets, Suits',
        Price: '$580'

      },
      {
        img: 'modern_black_leather_suit-400x520.jpg',
        prodName: 'Modern Black Leather Suit',
        prodP: 'Men, Jackets',
        Price: '$96'

      }
    ]
   
  }
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
