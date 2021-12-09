<template>
  <section class="Products py-5">
      <div class="row first-row text-end">
          <div class="col-lg-7"></div>
          <div class="col-lg-4 col-sm-10 mx-3">
              <h2>ﻣﻨﺘﺠﺎت زد</h2>
              <p>زد تدعمك في تجارتك الإلكترونية عن طريق توفير حلول ومنتجات متخصصة يمكنك ربطها مباشرة مع متجرك الإلكتروني على زد.</p>
          </div>
      </div>
      <div class="row sec-col">
          <div class="pic col-lg-5 col-sm-12">
              <img src="../../../images/product01.gif" alt="" class="my-img img-fluid">
          </div>
          <div class="col-lg-5 col-sm-12">
              <div class="box text-end active">
                  <h3>زد شب</h3>
                  <p>حل تقني يدير لك شركات الشحن حسب مستويات الخدمة تضم أكثر من 15 شركة شحن بعقد الكتروني واحد وبضغطة زر</p>
                  <a href="#">لمعرفه المزيد</a>
              </div>
              <div class="box text-end">
                  <h3>سوق تطبيقات زد</h3>
                  <p>سوق تطبيقات زد يوفر لك جميع الأدوات التي تساعد في ادارة متجرك الإلكتروني بشكل فعال ومتكامل، حيث يمكنّك  من الربط هذه الحلول مع بشكل مباشر</p>
                  <a href="#">لمعرفه المزيد</a>
              </div>
              <div class="box text-end">
                  <h3>سوق ثيمات زد</h3>
                  <p>
                    تقديم العديد من خيارات الواجهة المخصصة "الثيمات" لمتجرك الإلكتروني في زد، بأشكال وتصنيفات تساعد في تميز واجهة المتجر</p>
                  <a href="#">لمعرفه المزيد</a>
              </div>
              <div class="box text-end">
                  <h3>شركاء حلول زد</h3>
                  <p>برنامج يسهّل عملية البحث عن حلول احترافية من مزودي خدمات متخصصين في مجالاتهم لتلبية احتياجاتك في جميع مراحلك في رحلة التجارة الإلكترونية</p>
                  <a href="#">لمعرفه المزيد</a>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "Products",
};
</script>
<style scoped>
.Products{
   
    overflow: hidden;
}
.first-row h2{
    color: #8D5DA7;
}
.my-img{
    height: auto;
    width: 100%;
    object-fit: contain;
    border: 3px solid #8D5DA7;
    border-radius: 50px;
}
.pic{
    margin-left: 7rem;
}
.sec-col{
    margin-top: 1rem;
}
.box{
    padding: 1rem 0.5rem;
    cursor: pointer;
}
.box h3 {
     color: #8D5DA7;
}
.box p{
    color:#777;
}
.col-lg-5{
    padding: 0px !important;
}
.box a{
    text-decoration: none;
    color: #8D5DA7;
}
.box:hover h3{
    color:#45A787;
    transition: 0.4s;
}
.active{
    border-right: 4px solid #45A787;
    transition: 0.4s;
}
.box:hover{
    border-right: 4px solid #45A787;
    transition: 0.3s;
}
@media (max-width: 991.98px) {
    .pic{
        margin: 0px;
    }
    .my-img{
        width: 70%;
        display: block;
        margin: auto;
        }
    .box{
    margin-top: 2rem;
    width: 80%;
    margin-left: 5rem;
    }
    
}

</style>
