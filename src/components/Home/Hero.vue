<template>
  <section class="hero">
      <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-8 ms-auto hero-txt">
              <h1 class="text-right">زد شريكك في تجارتك الإلكترونية</h1>
              <p class="text-right">هدفنا نمو تجارتك الإلكترونية ومساندتك في رحلتك للتوسع والنجاح</p>
              <button class="hero-btn btn ">أبدا تجربتك المجانيه</button>
              <br>
              <span>ﻟﻤﺪة 14 ﻳﻮم!</span>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
  },
};
</script>

<style scoped>
.hero{
    height: 100vh;
    background: url("../../../images/hero-img.jpg") top left no-repeat #eee;
    background-size: cover;
}
.row{
    margin: 0px;
}
.hero-txt{
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 40px 40px !important;
    margin-top: 150px;
    margin-right: 3rem;
}
.text-right{
    text-align: end;
}
.hero-btn{
    font-size: 1rem;
    padding: 20px 10px;
    display: block;
    margin: auto;
    background-color: #8D5DA7;
  color:white;
}
.hero-btn:hover , .hero-btn:focus{
    color: #fff;
  background: #c68cd3;
  box-shadow: none;
  border-color: #c68cd3
}
h1{
    color:#8D5DA7;
    font-weight: 500;
}
p{
    color:#777
}
span{
    display: block;
    text-align: center;
    color: #777;
}
</style>
