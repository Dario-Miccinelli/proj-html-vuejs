<template>

    <div class="payment">

        <div class="copyright">

            <p>© Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
            
            </div>

            <div class="img"> <img src="../assets/img/payment_cards_footer.png" alt=""></div>
    </div>
</template>
   
<script>


export default {
    name: 'CardPayment',
    components: {

    },
    props: {

    }
}
</script>
   
   
<style scoped lang="scss">

.payment {
    height: 150px;
    width: 100%;
    background-color: #1E2124;
    color: white;
}

.copyright {
    text-align: center;
    font-size: 14px;
    line-height: 26px;

    p {
        padding-top: 2rem;
    }
}

.img {
    margin-top: 1.2rem;
    text-align: center;
    width: 100%;
}
   
</style>
   