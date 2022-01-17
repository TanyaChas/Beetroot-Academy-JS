<template>
<div class="contact">
  <section class="logo">
  <img alt="Vue logo" src="@/img/logo.png">
  <hr>
  </section>
   <section class="backgraund">
      <section class="ih-content-contactus">
        <div class="ih-content-contactus__text">
          <img alt="auto" src="../img/63.jpg">
          <h1>Het adres</h1>
          <p class="ih-content-contactus__address">
          "Schiekade 658, 3032 AK Rotterdam"
          </p>
          <p class="phone">
          "tel: 06 11 405 502"
          </p>
          <p class="email">
            <a href="mailto:struikbestratingen@yahoo.com">struikbestratingen@yahoo.com</a>
          </p>
          <br>
    
        </div>
        <div class="ih-content-contactus__form">
    <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Form</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">
              Heb je een vraag?
            </router-link>
          </p>
          VALIDATION ERRORS
          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Naam"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
              <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="phone"
                placeholder="Telefoonnummer"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Commentaar"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
        </div>
      </section>
    </section>

   <section class="map">
     <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17412.20755978622!2d4.456764953692259!3d51.919887930604006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels!5e0!3m2!1sen!2snl!4v1641904741777!5m2!1sen!2snl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
   </section>
   <section class="footer">
    <p class="footer_p">© 2009 - 2022 Struik Bestratingen. All Rights Reserved.</p>
   </section>
</div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>
.backgraund {
  display: block;
  width: 100%;
  background: url("../img/backgr2.jpg");
}
.ih-content-contactus {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
}
.ih-content-contactus__text {
    width: 50%;
    padding-top: 20px;
    color:rgb(216, 215, 215);
}
.ih-content-contactus__form {
    width: 50%;
    color:rgb(216, 215, 215);
}
.footer {
  background: rgb(71, 71, 71);
  padding: 30px 40px 30px 50px;
  margin-bottom: -90px;
  text-align: right;
  width: 100%;
}
.footer_p {
  text-align: center;
  color: #919191;
  font-size: 12px;
  text-shadow: 1px 1px 1px #000;
}
</style>