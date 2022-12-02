<template>

    <div>
        <div id="jumbotron">
            <div class="content-container">
            <h1 class="text-white">Brand New Arrivals</h1>
            <h2 class="text-white caption">NEW COLLECTION FROM NEW YORK</h2>
            <div class="button">
            <a class="trasparente">VIEW ALL</a>
            <a class="trasparente">LOOKBOOK</a>
            
            </div>
        </div>

        </div>
    </div>
</template>
   
<script>
export default {
    name: 'JumboTron',
    props: {

    }
}
</script>
   
   
<style scoped lang="scss">
#jumbotron {

    margin-top: 1.2rem;
  
      height: 640px;
      width: 100vw;
    
      background-repeat: no-repeat;
        background-size: cover ;
        background-position: center;
        
    
     background-image: (url(../assets/img/home1_slide_three_bg_2.jpg));

}

.text-white {
    color: white;
    font-size: 6rem;
    text-align: center;
    line-height: 1.2;
}

.caption {
    font-size: 2rem;
    font-weight: 400;
}

.content-container {
    position: absolute;
    top: 40%;
    width: 100%;
    padding: 0;
}

.button  {
    align-items: center;
    text-align: center;
    padding: 2rem;
    color: white;
    margin-top: 10px;
    
}

.trasparente {
   
    padding: 1.4rem;
    border: 2px solid white;
    border-radius: 25px;
    
    margin: 10px;
    background-color: #ffffff1d;
    font-size: 1rem;
}
</style>
   