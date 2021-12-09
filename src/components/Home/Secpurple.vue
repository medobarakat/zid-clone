<template>
  <section class="Secpurple py-5">
      <div class="row first-row">
        <div class="col-md-10 col-md-offset-1">
          <h2>متجر إلكتروني متكامل</h2>
          <p class="mt-4">بدون خبرة تقنية وبكل سهولة يمكنك البيع في أي مكان وزمان بمتجر إلكتروني خاص بك وبهويتك التجارية</p>
          <a href="#">  ....    لمعرفه المزيد</a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="screen">
            <img src="../../../images/animate-web.gif" alt="" class="img-fluid">
          </div>
          <div class="phone">
            <img src="../../../images/animate-mobile.gif" alt="" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="row last-row">
        <div class="col-md-9 col-sm-12">
          <div class="cardy">
            <img src="../../../images/ico-1.png" class="img-fluid" alt="">
            <h3>لوحة تحكم سهلة تساعدك في ادارة متجرك الإلكتروني</h3>
          </div>
           <div class="cardy">
            <img src="../../../images/ico-2.png" class="img-fluid" alt="">
            <h3>متجر إلكتروني آمن يتحمل ضغط الزيارات بنسبة %99.9 (Uptime)</h3>
          </div>
           <div class="cardy">
            <img src="../../../images/ico-3.png" class="img-fluid" alt="">
            <h3>تطوير وتحسين تقني مستمر و دائم</h3>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "Secpurple",
  props: {
  },
};
</script>
<style scoped>
.Secpurple{
  position: relative;
  background-color: #8D5DA7;
  color:#fff;
  height: 170vh;
}
.Secpurple::before{
  content: '';
    position: absolute;
    width: 100%;
    background-color: #e9ecef;
    height: 7rem;
    z-index: 1;
    top: 40rem;
}
.first-row{
  text-align: end;
}
.first-row h2{
  font-size: 40px;
  line-height: 85px;
}
.first-row p{
  line-height: 32px !important;
  font-size: 1rem;
}
.first-row a{
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  margin-top: 30px;
  display: block;
  transition: all 0.8s;
}
.first-row a:hover{
  color: #ffc107;
}
.row{
  margin: 0px;
}
.screen{
  position: relative;
  top: 4rem;
  left: 15rem;
  border: 1px solid #d9d9d9;
  width: 70%;
  border: 2px solid #8D5DA7;
  overflow: hidden;
  border-radius: 1rem;
  z-index: 2;

}
.phone{
  position: absolute;
    width: 13rem;
    height: 340px;
    border-radius: 1rem;
    left: auto;
    right: 17rem;
    top: 22rem;
    overflow: hidden;
    z-index: 2;
}
.cardy{
  margin-top: 3rem;
  color: #8D5DA7;
  background: #fff;
  box-shadow: 2px 2px 10px 1px rgb(141 93 167 / 16%);
  border-radius: 10px;
  border: 0;
  width: 200px;
  height: auto;
  float: right;
  margin-right: 0;
  margin-left: 20px;
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 4;
}
.last-row img{
  width: 40%;
}
.last-row h3{
  font-size: 1rem;
  margin-top: 1rem;
}

/* media querys */
@media (max-width: 1199.98px) {
  .cardy{
    margin-right: -6rem;
  }
  .cardy:nth-child(2){
    margin-right: 0.7rem;
  }
  .cardy:nth-child(3){
    margin-right: 0.7rem;
  }
}
@media (max-width: 991.98px) {
  .phone{
    width: 10rem;
    right: 9rem;
    top: 21rem
  }
  .cardy{
        margin-right: -10rem;
  }
}
@media (max-width: 767.98px) {
  .screen{
    left: 6rem;
    top: 2rem;
  }
  .phone{
    top: 20rem;
  }
  .cardy{
    margin-top:1rem;
    margin-right: 8rem;
    width: 150px;
  }
  .cardy h3{
    font-size: 0.8rem;
  }
}
@media (max-width: 575.98px) {
  .cardy{
    width: 100px;
  }
  .cardy h3{
    font-size: 0.4rem;
  }
}
@media (max-width: 575.98px) and (min-width: 400px) {
  .cardy{
    margin-top:1rem;
    margin-right: 5rem;
    width: 80px;
  }
}
@media (max-width: 400px) {
.cardy{
    margin-top:1rem;
    margin-right: 5rem;
    width: 80px;
  }
}

</style>
