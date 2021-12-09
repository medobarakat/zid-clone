<template>
  <section class="Addsec2 text-end py-5">
     <div class="row ioo">
         <div class="col-md-4"></div>
         <div class="col-md-7 io">
             <h2>ندعمك ونساندك</h2>
             <p>بالإضافة للحلول التقنية المتقدمة، نحرص في زد أن نكون معك بمسيرتك في التجارة خطوة بخطوة، من خلال التواصل الفعاّل وإيجاد حلول استراتيجية تمكنك من النمو بتجارتك الإلكترونية</p>
             <a href="#"> ..... لمعرفه المزيد</a>
         </div>
     </div>
     <div class="row dropping">
         <div class="col-md-7 col-sm-10">
             <div class="cardy">
                 <img src="	https://zid.sa/wp-content/themes/zid2020/images/ico-4.png" alt="">
                 <h3>ساعات استشارية</h3>
                 <p>لتمكينك من تحسين العمل والأداء في أي جانب يتعلق في التجارة الإلكترونية، والتسويق، والإدارة المالية أو التسويقية</p>
             </div>
             <div class="cardy">
                 <img src="	https://zid.sa/wp-content/themes/zid2020/images/ico-4.png" alt="">
                 <h3>ساعات استشارية</h3>
                 <p>لتمكينك من تحسين العمل والأداء في أي جانب يتعلق في التجارة الإلكترونية، والتسويق، والإدارة المالية أو التسويقية</p>
             </div>
             <div class="cardy">
                 <img src="	https://zid.sa/wp-content/themes/zid2020/images/ico-4.png" alt="">
                 <h3>ساعات استشارية</h3>
                 <p>لتمكينك من تحسين العمل والأداء في أي جانب يتعلق في التجارة الإلكترونية، والتسويق، والإدارة المالية أو التسويقية</p>
             </div>
         </div>
     </div>
  </section>
</template>

<script>
export default {
  name: "Addsec2",
};
</script>
<style scoped>
.Addsec2{
    /* overflow: hidden; */
    background: #8D5DA7;
    color: #fff;
    width: 100%;
}
h2{
    font-weight: bold;
}
p{
    font-size: 1rem;
    line-height: 2rem;
}
a{
    color:white;
    text-decoration: none;
    transition: all 0.4s;
}
a:hover{
    color:yellow
}
.dropping{
    position: relative;
    top: 200px
}
.cardy{
    border: 0;
    width: 180px;
    float: right;
    margin-right: 0;
    margin-left: 22px;
    padding: 15px 10px;
    background-color: white;
    z-index: 1;
    border-radius: 2rem;

}
.cardy img{
    width: 54px;
    height: 54px;
    display: block;
    margin-left:3rem;
    margin-bottom: 1rem;
    z-index: 2;
    
}
.cardy h3{
    z-index: 2;
    color:#8D5DA7;
    margin: auto;
    font-size: 1.2rem;
    margin-bottom: 1rem;
}
.cardy p{
    color: #777;
    margin: auto;
    font-size: 0.7rem;
}
.io ,.ioo,.dropping {
    margin: 0;
}
</style>
