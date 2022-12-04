<template>
    <div id="main" class="m-auto">
    <div class="featured " >
      
       <h2>Featured Products</h2>
      
       
       <div>
        <div class="smaller">
          <p>Must have products from our top sellers </p> 
        </div>

        <div class="anchor-tag">
          <a class="button">Men</a>
          <a class="button grey">Women</a>
          <a class="button grey">Accessories</a>
        </div>
       </div>



       <!-- section  -->
       <section class="d-flex section-feat m-auto" >
        <div v-for="(elem, index) in featuredProd" :key="index" class=" d-flex featured-content">
      <img :src="`/images/${elem.img}`" alt="">
    
     
      <h4>{{ elem.prodName }}</h4>
     
      <p>{{elem.prodP}}</p>
    
      <p class="price">{{elem.Price}}</p>
      </div>

       </section>
       <!-- /section -->


    </div>

    
    
  </div>
   </template>
   
   <script>
   export default {
     name: 'MainComp',
     props: {
      featuredProd : Object
       
     },
     methods : {

     
     },
     data() {
      return {
        
      }
     }
   }
  
   </script>
   
   
   <style scoped lang="scss">
   .d-flex {
    display: flex;
   }

  #main {
    width: 100%;
    display: flex;
    margin-top: 3rem;
 
    
  }
   .m-auto {
    margin: auto;
   }

   .featured {
    font-size: 1.7rem;
    width: 70%;
    margin: auto;
    text-align: center;
    
    
    .smaller {
      margin-top: 0.8rem;
      font-size: 1.4rem;
      font-weight: lighter;
    }
    
   }

  

   .anchor-tag {
    margin-top: 4rem;
    text-align: center;
    
   }
   .button {
    padding: 0.6rem 3rem;
    border: 2px solid #EAEAEA;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

   
   }
   .grey {
      background-color: #F6F6F6;
    }

    .grey:hover {
      background-color: white;
    }

    .featured-content {
      
      flex-wrap: wrap;
      flex-direction: column;
      text-align: left;
      h4 {
        font-size: 1.4rem;
      }

      h4:hover {
       
          color: #598DD6;

        
      }
      p {
        font-size: 1.1rem;

       
      }

      p:hover {
       color: #598DD6;
      }
      .price {
          color: #598DD9;

        }
    }

    .section-feat {
      margin-top: 3.5rem;
   
      
    }

    #main > div > section > div > img {
      width: 90%;
      height: 80%;
      margin-bottom: 0.5rem;
    }
   </style>
   