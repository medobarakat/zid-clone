<template>
  <section class="Addsec4 text-center py-5">
   <div class="row ao">
       <div class="col-md-12 ao">
           <h1>متاجر حققت نجاحات مع زد</h1>
       </div>
   </div>
   <div class="row ao">
       <div class="col-lg-10 text-center centerme">
           <div class="row ao py-5">
       <div class="col-md-2 col-sm-4">
           <img class="logo" src="https://zid.sa/wp-content/themes/zid2020/images/logo-store7.png" alt="">
       </div>
        <div class="col-md-2 col-sm-4">
           <img class="logo" src="	https://zid.sa/wp-content/themes/zid2020/images/logo-store17.png" alt="">
       </div>
        <div class="col-md-2 col-sm-4">
           <img class="logo" src="https://zid.sa/wp-content/themes/zid2020/images/logo-store15.png" alt="">
       </div>
        <div class="col-md-2 col-sm-4">
           <img class="logo" src="https://zid.sa/wp-content/themes/zid2020/images/logo-store14.png" alt="">
       </div>
        <div class="col-md-2 col-sm-4">
           <img class="logo" src="https://zid.sa/wp-content/themes/zid2020/images/logo-store2.png" alt="">
       </div>
        <div class="col-md-2 col-sm-4">
           <img class="logo" src="https://zid.sa/wp-content/themes/zid2020/images/logo-store6.png" alt="">
       </div>
   </div>
       </div>
   </div>
   <div class="row ao lastrow">
       <div class="col-lg-6">
           <img class="last-img" src="https://zid.sa/wp-content/themes/zid2020/images/footer-img.jpg" alt="">
       </div>
       <div class="col-lg-6 mt-5 text-center">
           <h2>
               ابدأ قصة نجاحك مع آلاف التجار في زد
           </h2>
           <button class="btn mybtn my-5 ">أبدا تجربتك المجانيه</button>
           <br>
            <span class="mt-3">لمده 14 يوم !</span>
       </div>
       
   </div>
  </section>
</template>
       

<script>
export default {
  name: "Addsec4",
};
</script>
<style scoped>
.ao{
    margin: 0;
    padding: 0;
}
.centerme{
    margin: auto;
}
.logo{
    width: 130px;
    height: 90px;
    object-fit: contain;
    transition: all 0.4s;
}
.logo:hover{
    padding: 10px;
}
.lastrow{
    background-color: #F0F0F0;
}
.last-img{
    height: 20rem;
}
h2{
    font-weight: bold;
    color: #8D5DA7;
}
.mybtn{
    background-color: #8D5DA7;
  color:white;
  width: 20rem;
  font-size: 30px;
  margin-top: 8px;
}
.mybtn:hover{
    color: #fff;
  background: #c68cd3;
  box-shadow: none;
  border-color: #c68cd3
}
span{
    color:#777
}
</style>
