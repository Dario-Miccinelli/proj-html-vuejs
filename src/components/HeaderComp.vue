<template>
  
    <div id="header">
      <div id="headersopra">
      <span class="icone">
        <font-awesome-icon icon="fa-brands fa-facebook-f"  />
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-brands fa-instagram"  />
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </span>

      <span class="sezioni">
        <p>Shopping Cart</p>
        <span class="sezioni border">
        <p class="">My Account</p>
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </span>
        
        <font-awesome-icon class="cart" icon="fa-solid fa-cart-shopping" />
         <p> CART </p>
         <font-awesome-icon icon="fa-solid fa-chevron-down" />
        
    </span>
    </div>

    <!-- FINE HEADER SUPERIORE  -->



    <!-- HEADER PARTE SOTTO CON LOGO -->

      <section class="headersotto">

        <img src="../assets/img/classic_shop_logo2x.png" class="logo" alt="Logo AVADA">

        <div class="headersottomenu">
          <p v-for="(elem, index) in dati" :key="index">{{elem.tagHeader}}<font-awesome-icon icon="fa-solid fa-chevron-down" /></p>
         
          <button>SHOP NOW!</button>
          <font-awesome-icon class="glass" icon="fa-solid fa-magnifying-glass" />
        </div>
       

      </section> 

      <!-- FINE HEADER PARTE LOGO AVADA -->

      <!-- INIZIO JUMBO -->
      <JumboTron/>
     



    </div>
   </template>
   
   <script>

import JumboTron from './JumboTron.vue';
   export default {
     name: 'HeaderComp',

     components: {
      JumboTron
     },
     props: {

      dati : Array
       
     }
   }
   </script>
   
   
   <style scoped lang="scss">

   

   #header {
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
    
    
   }

   #headersopra {
    margin: auto;
    width: 70%;
    display: flex;
    justify-content: space-between;

    
   }

   .headersotto {
    margin: auto;
    width: 70%;
    display: flex;
    border-top: 1px solid #8C9BA9;
    
    .glass {
      margin-top: 2rem;
    }
   }

   .logo {
    margin-top: 24px;
    width: 190px;
    height: 50px;
   }

   .headersottomenu {
    width: 100%;
    display: flex;
    justify-content: space-around;

    p {
      margin-top: 2rem;
      color: #8C9BA9;
      
      font-size: 1.1rem;
    }

    button {
      width: 10%;
      
      margin-top: 1.5rem;
      border-radius: 20px;
      border: none;
      background-color: #427ED1;
      color: white;
      height: 40px;
      font-size: 0.95rem;
    }

   }

   .icone {
    font-size: 1.2rem;
    
    color: #575C61;
    

    svg {
      padding: 1rem;
    }
   }

   .sezioni {
    display: flex;
    align-items: center;
    color: #8C9BA9 ;
    
    .cart {
      margin-left: 1rem;
      color: black;
    }
    
    p {
      padding: 0px 25px;
      color: #8C9BA9;
      
    }


    .border {
      border-left: 1px solid;
      border-right: 1px solid;
      
      padding: 11px;
      
    }
    
 
  
  
  
  }
   </style>
   