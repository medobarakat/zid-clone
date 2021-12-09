<template>
  <section class="Addsec1 text-center py-5">
     <div class="row">
         <div class="col-lg-8 col-md-12">
             <h1>3,025,141,165</h1>
         </div>
         <div class="col-lg-4 col-md-12">
             <h3>مبيعات المتاجر</h3>
             <h3>بالريال السعودي</h3>
         </div>
     </div>
  </section>
</template>

<script>
export default {
  name: "Addsec1",
};
</script>
<style scoped>
.Addsec1{
    overflow: hidden;
    background: #3a9979;
    color: #fff;
    width: 100%;
}
h1{
    font-size: 8rem;
    font-weight: bold;
}
h3{
    margin:1rem 0rem;
    font-weight: bold;
}
/* media query */
@media (max-width: 767.98px) {
    h1{
        font-size: 6rem;
    }
}
@media (max-width: 575.98px) {
    h1{
        font-size: 4rem;
    }
}

</style>
