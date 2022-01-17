<template>
<div class="header">
  <!--<img class="header_logo" src="../src/assets/logo.png">-->
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/hoveniersbedrijf">Hoveniersbedrijf</router-link> |
      <router-link to="/bestratingen">Bestratingen</router-link> |
      <router-link to="/groenvoorziening">Groenvoorziening</router-link> |
      <router-link to="/zuigwerkzaamheden">Zuigwerkzaamheden</router-link> |
      <router-link to="/contact">Contact</router-link> 
    </div>
    <router-view/>
  </div>
</div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/*.header {
 
  justify-content: space-between;
  align-items: center;
  background: #d2f7e6;

}
.header_logo {
  margin: 0 auto;
}*/
</style>
