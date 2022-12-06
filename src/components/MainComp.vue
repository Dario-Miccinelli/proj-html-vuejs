<template>
  <div id="main" class="m-auto main">
    <div>

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
      <section class="d-flex section-feat m-auto">
        <div v-for="(elem, index) in featuredProd" :key="index" class=" d-flex featured-content">
          <img :src="`/images/${elem.img}`" alt="">


          <h4>{{ elem.prodName }}</h4>

          <p>{{ elem.prodP }}</p>


          <p class="price">{{ elem.Price }}</p>


        </div>

      </section>

      <div id="hidden2" class="cards">

    
        <div class="card-hover2 hoverfix">
          <font-awesome-icon icon="fa-solid fa-circle-check" />

        </div>

        <div class="card-hover2 hoverfix2">
       
          <font-awesome-icon icon="fa-solid fa-circle-check" />

        </div>


        <div class="card-hover2">
        
          <font-awesome-icon icon="fa-solid fa-circle-check" />

        </div>
        <div class="card-hover2 hoverfix3">

          <font-awesome-icon icon="fa-solid fa-circle-check" />

        </div>

      </div>
      <!-- /section -->




      <!-- section 3 foto bg -->
      <section class="d-flex collection">

        <!-- winter  -->
        <div class="w33 pic1 collect-season">
          <div class="position">
            <h2 class="">Winter Collection</h2>
            <p class="">STYLISH AND WARM</p>
            <a class="">VIEW MORE</a>
          </div>
        </div>

        <!-- spring -->
        <div class="w33 pic2 collect-season">
          <div class="position">
            <h2 class=" ">Spring Collection</h2>
            <p>BRIGHT AND COLORFUL</p>
            <a>VIEW MORE</a>
          </div>
        </div>

        <!-- autumn -->
        <div class="w33 pic3 collect-season">
          <div class="position">
            <h2 class=" ">Autumn Collection</h2>
            <p>RICH AND COMFORTABLE</p>
            <a>VIEW MORE</a>
          </div>
        </div>

      </section>

      <!-- section collection end -->


      <!-- best seller -->

      <section class="best-seller">

        <div>
          <h2>Best Seller</h2>
          <p class="smaller">Must have products from our top sellers</p>
        </div>

        <div id="show" class="cards">

          <img v-for="(elem, index) in BestSeller" :key="index" :src="`/images/${elem.img}`" alt="Img Best Seller">




        </div>

        <div id="hidden" class="cards">

          <div class="card-hover">
            <h6>Spring Printed Dress</h6>
            <p>Women</p>
            <p><strong>$65</strong></p>
            <div class="icone-hover">

              <font-awesome-icon class="cart" icon="fa-solid fa-cart-shopping" />


              <font-awesome-icon class="details" icon="fa-solid fa-bars" />
            </div>

          </div>
          <div class="card-hover">
            <h6>Modern Love tee</h6>
            <p>Women</p>
            <p><strong>$55</strong></p>
            <div class="icone-hover">

              <font-awesome-icon class="cart" icon="fa-solid fa-cart-shopping" />


              <font-awesome-icon class="details" icon="fa-solid fa-bars" />
            </div>

          </div>
          <div class="card-hover">
            <h6>Leather Jacket</h6>
            <p>Women</p>
            <p><strong>$65</strong></p>
            <div class="icone-hover">

              <font-awesome-icon class="cart" icon="fa-solid fa-cart-shopping" />


              <font-awesome-icon class="details" icon="fa-solid fa-bars" />
            </div>
          </div>
          <div class="card-hover">
            <h6>Leather Elegant Jacket</h6>
            <p>Men</p>
            <p><strong>$65</strong></p>
            <div class="icone-hover">

              <font-awesome-icon class="cart" icon="fa-solid fa-cart-shopping" />


              <font-awesome-icon class="details" icon="fa-solid fa-bars" />
            </div>
          </div>
          <div class="card-hover">

            <h6>Punk Shirt</h6>
            <p>Women</p>
            <p><strong>$25</strong></p>
            <div class="icone-hover">

              <font-awesome-icon class="cart" icon="fa-solid fa-cart-shopping" />


              <font-awesome-icon class="details" icon="fa-solid fa-bars" />
            </div>

          </div>

        </div>
      </section>


      <!-- fine best seller  -->


      <!-- pt con bg e 2 img -->
      <section class="grey-bg">
        <div class="d-flex pic-container">
          <div class="position-section">
            <h2 class="m-top">70% Off</h2>
            <p>Christmas sale from 05 december to 25 december! </p>
            <a>VIEW MORE</a>
          </div>

          <img src="../assets/img/promo_box_1_bg.jpg" alt="">
          <div class="position-right">
            <h2 class="m-top">Free Shipping</h2>
            <p>Christmas sale from 05 december to 25 december! </p>
            <a>VIEW MORE</a>
          </div>
          <img src="../assets/img/promo_box_2_bg.jpg" alt="">

        </div>
      </section>

      <!-- fine pt con bg e 2 img -->

      <!-- best seller -->

      <section class="new-arrivals">

        <div class="mt-rem">
          <h2>New Arrivals</h2>
          <p class="smaller">Brand new products from top designers</p>
        </div>

        <div class="new-arr-cards show">

          <img v-for="(elem, index) in newArrivals" :key="index" :src="`/images/${elem.img}`" alt="Img New Arrivals">

        </div>




      </section>

      <!-- fine best seller  -->

      <MainCompBottom />

    </div>




  </div>
</template>
   
<script>
import MainCompBottom from './MainCompBottom.vue';

export default {
  name: "MainComp",
  props: {
    featuredProd: Array,
    BestSeller: Array,
    newArrivals: Array
  },
  methods: {},
  data() {
    return {};
  },
  components: {
    MainCompBottom
  }
}

</script>
   
   
<style scoped lang="scss">
.d-flex {
  display: flex;
}

.mt-rem {
  margin-top: 3.5rem;
}

#main {
  width: 100%;
  display: flex;
  margin-top: 3rem;


}

.m-auto {
  margin: auto;
}

.main {
  font-size: 1.7rem;
  width: 100%;
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
  width: 70%;


}

#main>div>section>div>img {
  width: 90%;
  height: 80%;
  margin-bottom: 0.5rem;
}


.collection {
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: -22rem;
  margin-bottom: 3rem;
  color: white;


  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

  }

  a {
    font-size: 0.9rem;
    border: 1px solid;
    border-radius: 13px;
    padding: 4px 10px;
    background-color: #ffffff1d;


  }
}


.w33 {
  width: 33.33%;
  height: 595px;
  background-position: top;
  background-size: cover;

}

.pic1 {
  background-image: url('../assets/img/winter_collection_bg.jpg');

}

.pic2 {
  background-image: url('../assets/img/spring_collection_bg.jpg');

}

.pic3 {
  background-image: url('../assets/img/autumn_collection_bg.jpg');

}

.position {
  margin-top: 25rem;

}

.cards {
  display: flex;
  width: 65%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.new-arr-cards {
  display: flex;
}

.pic-container {
  width: 50%;
  margin-top: -23rem;


}

.grey-bg {
  width: 100%;
  margin: auto;
  background-image: url('../assets/img/bkgd_confetti-compressor.jpg');
}

#main>div>section.grey-bg>div>img:nth-child(2) {
  width: 100%;
  padding: 4rem 7rem;

}

#main>div>section.grey-bg>div>img:nth-child(4) {
  width: 100%;
  padding: 4rem 7rem;

}


.position-section {
  position: absolute;
  left: 15rem;
  top: 188rem;
  color: white;
  text-align: left;
  font-size: smaller;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

  }

  a {
    font-size: 1rem;
    border: 1px solid;
    border-radius: 13px;
    padding: 5px 15px;
    background-color: #ffffff1d;


  }
}

.position-right {
  position: absolute;
  right: 16rem;
  top: 188rem;
  color: white;
  font-size: smaller;
  text-align: left;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

  }

  a {
    font-size: 1rem;
    border: 1px solid;
    border-radius: 13px;
    padding: 5px 15px;
    background-color: #ffffff1d;


  }
}

#main>div>section.new-arrivals>div.new-arr-cards>img {
  width: 15%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

// prova hover


#show:hover {
  opacity: 0.9;

}



.card-hover2 {
  height: 412px;
  width: 315px;
  margin: 15px;
  background: linear-gradient(135deg, #CE9FFC 0%, #7367F0 100%);
  position: relative;
  bottom: 34.8rem;
  font-size: 3rem;
  right: 1.2rem;
  opacity: 0;
  color: black;
  padding: 11rem 1rem;
  
}
.card-hover2:hover {
  opacity: 0.9;
}

.card-hover {
  width: 100px;
  height: 350px;
  background: linear-gradient(135deg, #CE9FFC 0%, #7367F0 100%);
  width: 50%;
  margin: 10px;
  position: relative;
  bottom: 24.8rem;
  opacity: 0;
  font-size: smaller;
  color: white;
  margin-top: 10px;


  h6 {
    margin-top: 6rem;
  }

  p {
    margin-top: 15px;
    font-size: 0.9rem;
  }

}

.card-hover:hover {
  opacity: 0.9;
}

.cart {
  margin: 4rem 2rem;

}

.details {
  margin: 4rem 2rem;
}

.hoverfix {
right: 4.2rem;
}

.hoverfix2 {
  right: 2.6rem;
}

.hoverfix3 {
  left: 0.6rem;
  width: 290px
}


.m-top {
  margin-top: 18rem;
}

// prova hover /
</style>
   