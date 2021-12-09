<template>
  <div class="home">
    <Hero/>
    <Secpurple />
    <Products />
    <Services />
    <Addsec1 />
    <Addsec2 />
    <Addsec3 />
    <Addsec4 />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Home/Hero.vue'
import Secpurple from '../components/Home/Secpurple.vue'
import Products from '../components/Home/Products.vue'
import Services from '../components/Home/Services.vue'
import Addsec1 from '../components/Home/Addsec1.vue'
import Addsec2 from '../components/Home/Addsec2.vue'
import Addsec3 from '../components/Home/Addsec3.vue'
import Addsec4 from '../components/Home/Addsec4.vue'
import Footer from '../components/Home/Footer.vue'


export default {
  name: 'Home',
  components: {
    Hero,
    Secpurple,
    Products,
    Services,
    Addsec1,
    Addsec2,
    Addsec3,
    Addsec4,
    Footer
  }
}
</script>
,
    Services<style>
section{
    font-family: 'Tajawal', sans-serif;
}
</style>
