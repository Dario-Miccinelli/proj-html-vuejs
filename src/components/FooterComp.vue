<template>
  
    <div>
      <BrandLogos/>
      <SubScribe/>
      <FooterResume/>
      <CardPayment/>

    </div>
   </template>
   
   <script>

import BrandLogos from './BrandLogos.vue';
import SubScribe from './SubScribe.vue';
import FooterResume from './FooterResume.vue';
import CardPayment from './CardPayment.vue';
   export default {
     name: 'FooterComp',
     components: {
      BrandLogos,
      SubScribe,
      FooterResume,
      CardPayment
     },
     props: {
       
     }
   }
   </script>
   
   
   <style scoped lang="scss">
   
   </style>
   