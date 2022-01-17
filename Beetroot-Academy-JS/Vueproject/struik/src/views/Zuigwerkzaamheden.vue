<template>
  <div class="about">
    <!--<section class="logo">
    <img alt="Vue logo" src="@/img/logo.png">
    <hr>
    </section>-->
    <section class="container-content">
      <div class="container-content-text">
        <h4>Ook kunt u bij ons bomen bestellen voor in uw tuin.</h4>
      <p>Wilt u een terras aanleggen of een tuinpad?</p>
 
      <p>Wilt u meer weten?</p>
      <p>Neem dan vandaag 
        <strong><a href="mailto:info@struikbestratingen.nl">contact</a></strong>
        op voor een geheel vrijblijvende offerte!</p>
      </div>
    </section>
    <section class="container">
        <div class="container_box">
           <div class="block_1">
               <img src="../img/101buxus.jpg">
               <h3 class="h3">Ilex crenata</h3>
               <p class="p">De ideale haag! Dat is de sterke Japanse hulst (Ilex crenata). De Ilex is zeer geschikt als vervanger voor de buxus. De Japanse hulst heeft een compacte groeivorm en de takken zijn voorzien van kleine groene blaadjes.
                    De Ilex is ook nog eens groenblijvend en winterhard en de Ilex blijft vrij van verschillende motten.. Voor een dichte haag planten we 6 planten per strekkende meter.Het snoeien of modelleren van de hulst doen we in januari en december. De Ilex staat graag in de halfschaduw. We geven de Japanse hulst 1 keer per week water. 
                    Bij droogte geven we extra water.
               </p>
               <p>prijs €9,99</p>
               <button class="btn" type="submit">
               <a href="mailto:info@struikbestratingen.nl">Bestellen</a>
               </button>
           </div>
           <div class="block_2">
               <img src="../img/105Klimop.jpg">
               <h3 class="h3">Hedera hibernica</h3>
               <p class="p">Een klimop die ook geschikt is als bodembedekker? Dat is de Hedera hibernica. We kunnen de Hedera ook gebruiken als afscheiding met behulp van een klimrek. De Hedera blijft groen in de winter en geeft onze tuin vorm en volume als veel andere planten kaal zijn. We kunnen de klimop planten in de volle grond in onze tuin. Of in een ruime pot voor op ons terras.</p>
               <p>prijs €9,99</p>
               <button class="btn" type="submit">
               <a href="mailto:info@struikbestratingen.nl">Bestellen</a>
               </button>
            </div>
           <div class="block_3">
               <img src="../img/103Haagliguster.jpg">
               <h3 class="h3">Ligustrum ovalifolium</h3>
               <p class="p">De naam zegt het al: de haagliguster (Ligustrum ovalifolium) is ideaal om te gebruiken als haag! Simpel en functioneel. In de zomer verschijnen er gedurende een korte periode kleine witte bloemetjes op de haag. Een leuk extra detail! Deze winterharde haag behoudt het hele jaar zijn kleur!
We snoeien of modelleren de liguster indien nodig in de lente en de zomer. We zetten de plant op een plek met veel zonlicht. We geven de plant matig water. Bij droogte geven we extra water.</p>
               <p>prijs €11,99</p>
               <button class="btn" type="submit">
               <a href="mailto:info@struikbestratingen.nl">Bestellen</a>
               </button>
            </div>
            <div class="block_4">
               <img src="../img/104Beukenh.jpg">
               <h3 class="h3">Fagus sylvatica Atropurpurea</h3>
               <p class="p">Op zoek naar een bijzondere haag? Wij gaan voor de rode beukenhaag 'Atropurpurea' in kwekerspot. De bladeren van de beukenhaag (Fagus sylvatica) hebben een dieprode kleur. De mooie kleur siert bijna het hele jaar de tuin. In de winter kunnen de bladeren bruin worden. Ze blijven wel aan de struik zitten. De haag is dus bladhoudend! Zo hebben we het hele jaar door een mooie dichte haag. Voor een dichte haag planten we 3 struiken per meter.We snoeien de haag 2x per jaar. 1x in de winter en 1x nadat de knoppen zijn uitgelopen in het voorjaar. Voor een optimaal resultaat geven we de haag voeding voor 'beuken & hagen'. De haag groeit op elke vochthoudende en waterdoorlatende grond.</p>
               <p>prijs €7,99</p>
               <button class="btn" type="submit">
               <a href="mailto:info@struikbestratingen.nl">Bestellen</a>
               </button>
            </div>
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
  max-width: 1000px;
  margin: auto;
  padding: 30px 0 30px 50px;
  text-align: initial;
}
.container-content-text {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
}

.container {
    display: block;
    width: 100%;
}
.container_box {
    font-size: 16px;
    text-align: center;
    justify-content: space-around;
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-left: 130px;
}

.block_1 {
    padding-top: 60px;
   
}

.block_1:hover {
    background-color: rgb(46, 126, 81);
}
.h3 {
   color:rgb(216, 215, 215); 
   padding: 10px 0 10px 0;  
}
p {
    color:rgb(216, 215, 215); 
}
img {
    width: 270px;
    height: 270px;
    background-color: #e1eaec;
    text-align: center;
}

.block_2 {
    padding-top: 60px;
}

.block_2:hover {
    background-color: rgb(46, 126, 81);
}

.block_3 {
    padding-top: 60px;
}

.block_3:hover {
    background-color: rgb(46, 126, 81);
}

.block_4 {
    padding-top: 60px;
}

.block_4:hover {
    background-color: rgb(46, 126, 81);
}

.h4 {
    text-align: left;
}

.p {
    text-align: left;
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