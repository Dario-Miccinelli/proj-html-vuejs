<template>

    <div class="subscribe">


        <div class="mail">
            <font-awesome-icon class="mail-awesome" icon="fa-solid fa-envelope" />
          Subscribe now and get special offers </div>

        <div > <input class="input" type="text" placeholder="Insert your email">
        
            <button class="button">SEND</button>
        </div>
       

    </div>
</template>
   
<script>


export default {
    name: 'SubScribe',
    components: {

    },
    props: {

    }
}
</script>
   
   
<style scoped lang="scss">
.subscribe {
    width: 100%;
    height: 230px;
    background-color: #2E3238;
    color: white;
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
    display: flex;
    text-align: center;
    justify-content: space-around;

}

.mail {
    margin-top: 6rem;
    
}

.input {
    padding: 0.5rem;
    border-radius: 20px;
    width: 250px;
    border: none;
    margin-top: 6rem;
}

.button {
    padding: 0.5rem;
    border-radius: 20px;
    width: 150px;
    margin-left: 5px;
    border: none;
    color: white;
    background-color: #427ED1
;
}

.mail-awesome {
    color: #AAAAAA;
    background-color: #2B2E32;
    border-radius: 50%;
   

 
    }

   
</style>
   