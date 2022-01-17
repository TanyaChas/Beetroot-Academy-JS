<template>
  <div class="about">
    <!--<section class="logo">
    <img alt="Vue logo" src="@/img/logo.png">
    <hr>
    </section>-->
    <section class="container-content">
      <div class="container-content-text">
        <h4>OOGSTEN</h4>
      <p>We hebben veel voorjaarsgroenten geoogst, zoals Detroit donkerrode bieten uit onze GreenStalk-planter en de gouden bieten die in andere containers groeiden. Bieten zijn ondiep gewortelde planten en groeien zeer goed in de GreenStalk plantenbak. We bleven deze maand broccolikoppen en zijscheuten oogsten, vroege koolsoorten, witte, cheddar en paarse bloemkool, koriander van de GreenStalk-bladplanter en koolrabi, ook wel Duitse kool genoemd. We hebben ook zuidelijke gigantische gekrulde mosterdgroenten geoogst, lente-uitjes uit onze klassieke GreenStalk-planter, goudklompmandarijnen, gepelde erwten, Oregon-lente- en biefstuktomaten die groeien in de verhoogde bedden en spinazie die groeit in de GreenStalk-bladplanter.</p>
      <p>Wilt u meer weten?</p>
      <p>Neem dan vandaag 
        <strong><a href="mailto:info@struikbestratingen.nl">contact</a></strong>
        op voor een geheel vrijblijvende offerte!</p>
      <p></p>
      </div>
    </section>
    <section class="posts">
        <div class="posts_first">
          <div class="post-backgraund_first">
            <img alt="img" src="../img/01.jpg" width="500px" height="333px">
            <p>Januari 08, 2022</p>
            <h3>Groenten en Kruiden</h3>
            <button class="btn" type="submit">
              <a href="http://localhost:8080/hoveniersbedrijf">Less verder</a>
            </button>
          </div>            
        </div>
        <div class="posts_second">
          <img alt="img" src="../img/02.jpg" width="500px" height="333px">
          <p>Januari 10, 2022</p>
          <h3>Hoe u de beste loquats in uw tuin kunt laten groeien!</h3>
          <button class="btn" type="submit">
            <a href="http://localhost:8080/hoveniersbedrijf">Less verder</a>
          </button>
        </div>
        <div class="posts_third">
          <img alt="img" src="../img/03.jpeg" width="500px" height="333px">
          <p>Januari 12, 2022</p>
          <h3>Mijn Tuin Tour</h3>
          <button class="btn" type="submit">
            <a href="http://localhost:8080/hoveniersbedrijf">Less verder</a>
          </button>
        </div> 

    </section>
    <section class="footer">
      <p class="footer_p">© 2009 - 2022 Struik Bestratingen. All Rights Reserved.</p>
    </section>
  </div>
</template>
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
.posts {
  display: flex;
  justify-content: space-around;
  padding-bottom: 50px;
  
}
.posts_first {
  background-color: rgb(224, 221, 221);
  width: 33%;
  padding-bottom: 30px;
}
.posts_second {
  background-color: rgb(224, 221, 221);
  width: 33%;
  padding-bottom: 30px;
}
.posts_third {
  background-color: rgb(224, 221, 221);
  width: 33%;
  padding-bottom: 30px;
}
.btn {
  background-color: rgb(73, 172, 73);
}
.footer {
  background: rgb(71, 71, 71);
  padding: 30px 40px 30px 50px;
  margin-bottom: -140px;
  width: 100%;
}
.footer_p {
  text-align: center;
  color: #919191;
  font-size: 12px;
  text-shadow: 1px 1px 1px #000;
}
a {
  color: #000;
  text-decoration: none;
}
</style>

<script>
export default {
  name: 'Groenvoorziening',
}
</script>

