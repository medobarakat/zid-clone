<template>
  <section class="Services py-5">
      <div class="row">
          <div class="col-lg-5"></div>
          <div class="col-lg-6">
              <div class="title text-end">
                  <h3>خدمات مساندة لتجارتك</h3>
                  <p>نوفر لك كل الخدمات اللي تدعمك في متجرك الالكتروني من مكان واحد و ربط مباشر مع أكثر من 25 شريك بمختلف الانشطة التجارية</p>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12 text-center">
                <div class="mylist">
                    <ul>
                        <li ><a href="#">المزيد من الخدمات</a></li>
                        <li ><a href="#">العمليات والتشغيل</a></li>
                        <li ><a href="#">الدفع الإلكتروني</a></li>
                        <li ><a href="#">الشحن والتوصيل</a></li>
                    </ul>
                </div>
            </div>
      </div>
      <div class="row last-row">
          <div class="col-lg-5 coy"><img src="../../../images/hometab1.jpg" alt="" class="img-fluid"></div>
          <div class="col-lg-7 text-end last-txt">
              <p>الربط مع مزودي الخدمات من شركات شحن وتوصيل مثل سمسا وارامكس والمزيد.</p>
              <p>
                  شركاء التوصيل
              </p>
              <div class="row logos">
                  <div class="col-lg-2 col-md-2 col-sm-2 my-logo">
                      <img src="https://zid.sa/wp-content/themes/zid2020/images/aramex.png" alt="">
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 my-logo">
                      <img src="	https://zid.sa/wp-content/themes/zid2020/images/smsa.png" alt="">
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 my-logo">
                      <img src="https://zid.sa/wp-content/themes/zid2020/images/tard.png" alt="">
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 my-logo">
                      <img src="https://zid.sa/wp-content/themes/zid2020/images/fastlo.png" alt="">
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 my-logo">
                      <img src="https://zid.sa/wp-content/themes/zid2020/images/fastlo.png" alt="">
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 my-logo">
                      <img src="https://zid.sa/wp-content/themes/zid2020/images/aymakan.png" alt="">
                  </div>
              </div>
              <a href=""> ... لمعرفه المزيد</a>
          </div>
      </div>
      </section>
</template>

<script>
export default {
  name: "Services",
  props: {
  },
};
</script>
<style scoped>
/* some resets */
.col-lg-6{
    padding-right: 0 !important;
    padding-left: 0 !important;
}
.row{
    margin:0px !important;
}
/* end of resets */
.title h3{
    color: #8D5DA7;
}
.title p{
    color:#777
}
.mylist{
    margin-top: 4rem;
    position: relative;
}
.mylist::before{
    content: '';
    height: 5px;
    width: 64%;
    position: absolute;
    background-color: rgb(156, 156, 156);
    right: 14rem;
    top: 3rem;
}
ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    
}
li{
    list-style: none;
    padding: 0px 4rem;
}
li:nth-child(4){
    position: relative;
}
li:nth-child(4)::after{
    content: '';
    position: absolute;
    background-color: #8D5DA7;
    height: 5px;
    top: 3rem;
    z-index: 2;
    width: 100%;
    right: 0;
}
a{
    text-decoration: none;
    color: #777 !important;
}
a:nth-child(1){
    color:#8D5DA7 !important
}
.last-row{
    margin-top:5rem !important;
}
.last-row img{
    display:block;
    margin-left: 7rem;
}
.last-txt{
    max-width: 29rem;
    margin-left: 10rem;
}
.last-row p{
    color: #777;
    margin-bottom: 3rem;
}
.last-row p:nth-child(2){
    color:black;
}
.my-logo img{
    margin-left: 10px;
    width: 60px;
    height: 60px;
}
.logos{
    margin-bottom: 2rem !important;
}
.last-txt a{
    color:#8D5DA7 !important;
    font-size: 1.3rem !important;
    transition: all 0.4s;
}
.last-txt a:hover{
    color: rgb(255, 208, 76) !important;
}
/* media querys */
@media (max-width: 767.98px) {
    .title{
    margin-right: 1rem;
    }
    .my-list{
    margin-right: 0rem;
    }
    .mylist::before{
        content:'';
        top:5rem;
        width: 86%;
        right: 2rem;
    }
    .mylist a{
        font-size: 15px;
    }
    li:nth-child(4)::after{
        content: '';
        top:5rem;
        right: 28px;
    }
    .last-row img{
        margin-left: 4rem;
        margin-bottom: 2rem;
    }
}
@media (max-width: 575.98px) {
    .title{
        margin-right: 0rem;
    }
    li{
        padding: 10px;
    }
    .mylist a{
        font-size: 13px;
        margin-left: 13px;
    }
    .last-row img:first-child{
        margin-left: 0rem;
    }
    .last-row img{
     margin-left: 2rem;
    }
    .my-logo img{
        width: 100px;
    height: 100px;
         margin-left: 8rem !important;

    }
    .last-txt{
        margin-left: 0rem;
    }
    .last-txt p{
        margin-right: 2rem;
    }
     a{
      margin-right: 2rem;
    }

}

</style>
