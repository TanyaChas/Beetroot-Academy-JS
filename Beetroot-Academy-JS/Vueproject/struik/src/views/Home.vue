<template>
<div class="home">
  <section class="logo">
  <img alt="Vue logo" src="../img/logo.png">
  <hr>
  </section>
  <div class="backgraund">
  <div class="container">
      <img class="img" alt="img" src="@/img/87.jpg"> 
    <section class="text">
      <p>Welkom op de website van Struik bestratingen!</p>
      <p>Wie zijn wij?</p>
      <p>Hoveniers- en bestratingsbedijf Struik is werkzaam in de aanleg van allerlei soorten bestratingen.
Door jarenlange ervaring kunnen wij snel en vakkundig een goede bestrating verzorgen.
Wij werken met gemotiveerde mensen en zorgen voor goede kwaliteit.</p>
      <p>Daarnaast zijn wij ook werkzaam in de groenvoorziening en hebben veel kennis van tuinaanleg en onderhoud.</p>
      <p>Het uitgangspunt bij alle werkzaamheden is een goed en mooi eindresultaat leveren voor een redelijke prijs.</p>
      <p>Wilt u meer weten?</p>
      <p>Neem dan vandaag nog 
        <strong><a href="mailto:info@struikbestratingen.nl">contact</a></strong>
        op voor een een geheel vrijblijvende offerte.</p>
    </section>
    <section class="footer">
      <p class="footer_p">© 2009 - 2022 Struik Bestratingen. All Rights Reserved.</p>
    </section>
  </div>
</div>
</div>
</template>

<script>


export default {
  name: 'Home',

}
</script>
<style scoped>
.backgraund {
  display: block;
  width: 100%;
  background: url("../img/backgr2.jpg");
}
.container {
  max-width: 1000px;
}
.img {
  width: 1000px;
}
@media (max-width: 1600px) {
  .img {
    width: 1000px;
  }
}
@media (max-width: 950px) {
  .img {
    width: 500px;
  }
}

.text {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  text-align:left;
  padding: 30px 50px 40px;
  color:rgb(216, 215, 215);
}
.footer {
  background: rgb(71, 71, 71);
  padding: 30px 40px 30px 50px;
  margin-bottom: -85px;
  width: 1000px;
}
.footer_p {
  color: #919191;
  font-size: 12px;
  text-shadow: 1px 1px 1px #000;
  text-align: center;
}
</style>
