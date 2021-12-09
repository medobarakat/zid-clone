<template>
<!-- start of the navbar -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navy2 collapse navbar-collapse">
        <i class="fas fa-globe"></i>
        <h5>EN</h5>
      </div>
      <div class="beforenavy">
        <ul class="navy">
          <li class="collapse navbar-collapse"><a href="#">تسجيل الدخول</a></li>
          <li><button class="btn navy-btn">أبدا تجربتك المجانيه</button></li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto text-center">
          <a class="nav-link mx-3" href="#">الاسعار</a>
          <a class="nav-link mx-3" href="#">الخدمات والمميزات</a>
          <a class="nav-link mx-3" href="#">عن زد</a>
          <a class="nav-link mx-3 active" aria-current="page" href="#">الرئيسيه</a>
        </div>
      </div>
      <a class="navbar-brand mx-5 text-center" href="#"
        ><img class="logo" src="../images/zid-logo.png" alt=""
      /></a>
    </div>
  </nav>
  <!-- end of the navbar -->
  <!--start of TheRest of the Page -->
  <router-view />
  <!-- end of TheRest of the Page -->
</template>
<style>
/* start of global */
html{
   transition: all 0.5s;
}
body {
  color: #606060;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  font-size: 20px;
  letter-spacing: -0.015em;
}
/* end of global */
/* start of media query */
/* wide screen */
@media (max-width: 991.98px) {
  .navbar-brand img{
    display: block;
    margin-left: 16rem;
    margin-top: 1rem;
  }
  .navbar .navbar-nav {
    display: inline-block;
    float: none;
}
.navbar .navbar-collapse {
    text-align: center;
}
}
/* mobiles */
@media (max-width: 767.98px) {
  .beforenavy{
 width: 20%;
}
  .navbar-brand img{
    display: block;
    margin-left: 10rem;
    margin-top: 1rem;
  }
  .navbar .navbar-nav {
    display: inline-block;
    float: none;
}
.navbar .navbar-collapse {
    text-align: center;
}
.navy-btn{
}
}

/* thin phone */
@media (max-width: 575.98px) {
  .navbar-brand img{
    display: block;
    margin-top: 1rem;
  }
  .navbar .navbar-nav {
    display: inline-block;
    float: none;
}
.navbar .navbar-collapse {
    text-align: center;
}
  .navy{
      margin-right: 0rem !important;
      padding: 0px;
  }
  .beforenavy{
    margin-left: -2.5rem;
}
.navy-btn{
  margin-left: 5rem;
}
}


/* very thin phone */
@media (max-width: 463px) {
  .beforenavy{
        margin-left: -3.5remy
  }
}


/* end of media query */
/* start of navbar */
.navbar{
  padding: 0px !important;
  font-weight:500;
  font-family: 'Tajawal', sans-serif;
  font-size: 0.7rem ;
  position: fixed !important;
  background-color: #fff;
  width: 100%;
  z-index: 9;
  border-bottom: 1px solid #777;
}
.nav-link{
  width: 50px !important;
}
.navbar div a{
  color:#8D5DA7 !important;
  width: 15rem;
  font-size:13px;
  margin-top: 0.5rem;
  padding: 0px 0px !;
  position: relative;
}
.navbar div a:nth-child(2){
  margin: 0px 
}
.navbar .navbar-nav .active::after{
  content: '';
    position: absolute;
    bottom: -1%;
    right: 0rem;
    background-color: #45A787;
    height: 5px;
    width: 80%;
}
.logo {
  width: 72px;
}
.navy{
  display: flex;
}
.navy li{
  list-style: none;
  padding: 0rem 1rem;
  margin-top: 10px;
}
.navy li .navy-btn{
  background-color: #8D5DA7;
  color:white;
  width: 10rem;
  font-size: 10px;
  margin-top: 8px;
}
.navy li .navy-btn:hover,.navy li .navy-btn:focus{
  color: #fff;
  background: #c68cd3;
  box-shadow: none;
  border-color: #c68cd3
}
.navy a{
  text-decoration: none;
  width: 7rem !important;
  font-size: 17px !important;
}
.navy2{
  display: flex;
}
.navy2 i{
  color: #4D435C;
    position: relative;
    top: 4px;
    font-size: 20px;
    padding: 0px 0px;
    display: inline-block;
}
.navy2 h5{
  font-size: 13px !important;
  margin-left: 1rem;
  margin-top: 0.4rem;
}
/* end of navbar */
</style>
<script>
// @ is an alias to /src
import Home from '@/views/Home.vue'

export default {
  name: 'Home',
  components: {
    Home
  }
}
</script>
