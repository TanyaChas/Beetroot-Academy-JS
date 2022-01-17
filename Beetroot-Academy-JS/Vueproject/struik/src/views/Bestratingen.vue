<template>
  <div class="about">
    <!--<section class="logo">
    <img alt="Vue logo" src="@/img/logo.png">
    <hr>
    </section>-->
    <section class="container-content">
      <div class="container-content-text">
        <h4>Aanleg bestrating en sierbestrating</h4>
      <p>Wilt u een terras aanleggen of een tuinpad?</p>
      <p>Wij werken met alle soorten tegels en stenen.</p>
      <p>Werkzaamheden:</p>
      <ul>
        <li>aanleg van bestrating met beton stenen of tegels</li>
        <li>aanleg van bestrating met gebakken stenen</li>
        <li>aanleg van bestrating met natuursteen</li>
        <li>aanleg van siermuren</li>
      </ul>
      <p>Wilt u meer weten?</p>
      <p>Neem dan vandaag 
        <strong><a href="mailto:info@struikbestratingen.nl">contact</a></strong>
        op voor een geheel vrijblijvende offerte!</p>
      <p></p>
      </div>
    </section>
    <section class="grid">
       <main class="main">
        <section class="container_first">
            <div class="grid_first">
                <div id="first" class="item">
                    <img src="../img/b31.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/b32.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/b33.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/b36.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/b37.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/b38.png" alt="">
                    <i class="instagram"></i>
                </div>
            </div>
        </section>
        <section class="container_second">
            <div class="grid_second">
                <div class="item">
                    <img src="../img/p122.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/p111.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/p187.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/p183.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/p126.png" alt="">
                    <i class="instagram"></i>
                </div>
                <div class="item">
                    <img src="../img/p129.png" alt="">
                    <i class="instagram"></i>
                </div>
            </div>
        </section>
    </main>
    <section class="footer">
      <p class="footer_p">© 2009 - 2022 Struik Bestratingen. All Rights Reserved.</p>
    </section>
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

.main {
    display: block;
    width: 100%;
    background-color: black;
    min-height: 100vh;
    padding: 50px 0;
}

.container_first {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    background-color: rgb(224, 221, 221);
}

.item {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
}

.item::after {
    position: absolute;
    content: "";
    background: rgba(233, 79, 67, 0.62);
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    opacity: 0;
    transition: .2s;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

i {
    position: absolute;
    color: white;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    font-size: 12em;
    transform: .2s;
}

.item:hover::after {
    opacity: 1;
}

.item:hover i {
    transform: translate(-50%, -50%) scale(1);
}

.grid_first {
    display: grid;
    grid-template-columns: repeat (4, 1fr);
    grid-template-rows: repeat (3, 1fr);
    grid-template-areas: "item item--big item2" "item item--big item3" "item4 item5 item6";
    gap: 30px;
    grid-auto-rows: minmax(1fr, auto);
    padding: 20px;
}
@media (max-width: 950px) {
  .grid_first{
    display: flex;
    flex-direction: column;
  }
}

#first {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}

.container_second {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    background-color: #1a1a1a;
}

.grid_second {
    display: grid;
    grid-template-columns: repeat (4, 1fr);
    grid-template-rows: repeat (3, 1fr);
    grid-template-areas: "item item--big item2" "item item--big item3" "item4 item5 item6";
    gap: 30px;
    grid-auto-rows: minmax(1fr, auto);
    padding: 20px;
}
@media (max-width: 950px) {
  .grid_second{
    display: flex;
    flex-direction: column;
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
