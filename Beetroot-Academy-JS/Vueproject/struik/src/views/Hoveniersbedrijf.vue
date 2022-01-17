<template>
  <div class="about">
    <!--<section class="logo">
    <img alt="Vue logo" src="@/img/logo.png">
    <hr>
    </section>-->
    <section class="container-content">
      <div class="container-content-text">
        <h4>Hoveniersbedrijf</h4>
      <p>Wilt u een nieuwe tuin aanleggen, uw bestaande tuin renoveren of laten onderhouden?</p>
      <p>Wij beschikken over jarenlange kennis en ervaring van alles op het gebied van tuinieren.</p>
      <p>Werkzaamheden:</p>
      <ul>
        <li>aanleg van terrassen en overige sierbestratingen</li>
        <li>aanleg met gebruikte stenen</li>
        <li>grondwerkzaamheden</li>
        <li>aanleg van siermuren</li>
        <li>plaatsen van schuttingsdelen / ijzeren schermen</li>
        <li>aanleg van gazon / graszoden</li>
        <li>aanleg van vijvers en poelen</li>
        <li>onderhoud van tuinen</li>
        <li>maaiwerkzaamheden</li>
        <li>plaatsen van tuinschuren</li>
        <li>verkoop van tuinmaterialen en beplanting</li>
      </ul>
      <p>Wilt u meer weten?</p>
      <p>Neem dan vandaag 
        <strong><a href="mailto:info@struikbestratingen.nl">contact</a></strong>
        op voor een geheel vrijblijvende offerte!</p>
      <p></p>
      </div>
    </section>
    <section class="wrapper">
      <div>
        <VueSlickCarousel :arrows="true" :dots="true"
                    @afterChange="onInitCarousel">
          <div class="img_first"><img src="../img/grid1.jpg" alt="img"></div>
          <div><img src="../img/grid2.jpg" alt="img"></div>
          <div><img src="../img/grid3.jpg" alt="img"></div>
          <div><img src="../img/grid4.jpg" alt="img"></div>
          <div><img src="../img/grid7.png" alt="img"></div>
          <div><img src="../img/grid8.png" alt="img"></div>
          <div><img src="../img/grid9.png" alt="img"></div>
          <div><img src="../img/grid10.png" alt="img"></div>
          <div><img src="../img/grid9.png" alt="img"></div>
          <div><img src="../img/grid8.png" alt="img"></div>
          <div><img src="../img/grid7.png" alt="img"></div>
          <div><img src="../img/grid6.jpg" alt="img"></div>
        </VueSlickCarousel>
      </div>
    </section>

    <section class="footer">
      <p class="footer_p">© 2009 - 2022 Struik Bestratingen. All Rights Reserved.</p>
    </section>
  
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    /*data() {
        return {
            slideItems: {
                {id:1, name: 'img1', }
            }
        }
    }*/
    components: { VueSlickCarousel },
    methods: {
        onInitCarousel: function (slideIndex) {
           console.log('slideIndex', slideIndex)
        }
    },
  }
</script>
<style scoped>
.about {
  display: block;
  width: 100%;
  background: url("../img/backgr2.jpg");
  min-height: 100vh;
  padding: 50px 0;
}
.container-content {
  color:rgb(216, 215, 215);
  box-shadow: 2px 0px 1px 0px rgb(0 0 0 / 20%);
  min-height: 400px;
  max-width: 1000px;
  margin: auto;
  padding: 30px 0 30px 50px;
  text-align: initial;
}
.container-content-text {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
}

.wrapper {
    text-align: center;
    margin: 0 auto;
    width: 700px;
}
@media (max-width: 950px) {
  .wrapper{
    width: 500px;
  }
}
@media (max-width: 550px) {
  .wrapper{
    width: 300px;
  }
}
@media (max-width: 450px) {
  .wrapper{
    width: 200px;
  }
}
img {
  width: 700px;
  height: 600px;
}
@media (max-width: 1280px) {
  img{
    width: 600px;
    height: 500px;
  }
}
@media (max-width: 1024px) {
  img{
    width: 600px;
    height: 500px;
  }
}
@media (max-width: 950px) {
  img{
    width: 500px;
    height: 400px;
  }
}
@media (max-width: 800px) {
  img{
    width: 400px;
    height: 300px;
  }
}
@media (max-width: 450px) {
  img{
    width: 200px;
    height: 100px;
  }
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