<template>
  <div id="app">
   
    <HeaderComp :dati="datiHeader"/>
    <MainComp :featuredProd="featuredProd" :BestSeller="BestSellerImg" :newArrivals="NewArrivalsImg"/>
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
    ],

    BestSellerImg: [
      {
        img: "bestseller1.jpg"
      },
      {
        img: "bestseller2.jpg"
      },
      {
        img: "bestseller3.jpg"
      },
      {
        img: "bestseller4.jpg"
      },
      {
        img: "bestseller5.jpg"
      },
    ],

    NewArrivalsImg: [ 
     

    {
      img: "newarrivals1.jpg"
    },
    {
      img: "newarrivals2.jpg"
    },
    {
      img: "newarrivals3.jpg"
    },
    {
      img: "newarrivals4.jpg"
    },
    {
      img: "newarrivals5.jpg"
    },
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
