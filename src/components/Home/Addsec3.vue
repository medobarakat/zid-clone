<template>
  <section class="Addsec3 text-end">
   <div class="row ioo">
       <div class="col-md-7">
           <div class="text row">
               <div class="col-lg-3"></div>
               <div class="col-lg-9">
                   <h2>مجتمع إلكتروني يشاركك خبراته</h2>
               <p>تبادل الخبرات ونصائح التجار بمختلف قطاعات التجارة الإلكترونية من خلال مجتمع فعال إلكترونياً أو تنظيم لقاءات شهرية حية</p>
               <a href="">..... لمعرفه المزيد</a>
               </div>
           </div>
       </div>
       <div class="col-md-5">
           <img class="my-img" src="https://zid.sa/wp-content/themes/zid2020/images/home-bg3.jpg" alt="">
       </div>
   </div>
   <div class="row py-5 sec2">
       <div class="col-md-2"></div>
        <div class="col-md-5">
           <p>زد  دايم قريبين مننا يرشدونا و يعلموننا دايم يطورون نفسهم و يساعدونا في تطوير تجارتنا .</p>
           <p>خدمة العملاء ردهم سريع وحلهم سريع دايما قريبين مننا، صعبة تحصر الأشياء المهمة اللي زد يقدمها لك </p>
           <h5>د . محمد الخليفي</h5>
           <span>صاحب متجر دوز</span>
       </div>
       <div class="col-md-5">
           <img src="https://zid.sa/wp-content/themes/zid2020/images/ts3-web.png" alt="">
       </div>
   </div>
  </section>
</template>

<script>
export default {
  name: "Addsec3",
};
</script>
<style scoped>

.ioo{
    margin: 0;
}
.my-img{
    height: 350px;
    width: 90%;
    object-fit: cover;
}
.text{
    margin-top: 12rem;
}
.text h2{
    color: #8D5DA7;
    margin-bottom: 1.5rem;
}
.text p{
    color: #777;
}
.text a{
    text-decoration: none;
    color: #8D5DA7;
    font-size: 1.2rem;
}

.sec2{
    margin: 0;
    background-color: #3a9979;
    color: #fff;
}
.sec2 img{
width: 9rem;
margin-right: 10rem;
}
.sec2 p{
    font-size: 19px;
    color: #fff;
}
.sec2 h5{
    font-weight: bold;
    font-size: 24px;
}


/* media query */
@media (max-width: 767.98px) {
    .my-img{
        margin-top: 1rem;
    }
}

</style>
