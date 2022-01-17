<template>
  <div class="about">
    <h1>Text :</h1>
    <div>{{titel}}</div>
    <!--<p>{{message}}</p> -->    <!--через скрипт-->
    <!--<p v-text="message"></p> --> <!--или через интерпаляцию (только текст)-->
    <p v-text="textNumber"></p>
    <br>
    <p>{{textNumber % 2 ? 'evel': 'odd'}}</p>
    <p>{{2+2}}</p>
    <a v-bind:href="link">{{link}}</a>    <!--привязка линка на страницу + script link -->
<br>
<!-- или так тоже можно -->
     <a :href="Link">{{link}}</a>
     <!-- кнопка -->
     <br>
     <button v-bind:disable="false">btn</button>
     <br>
     <!-- кнопка меняет цифру -->
      <button v-on:click="funcPlassNumber()">{{textNumber % 2}}</button>    
  <br>
      
      <!-- <p>{{funcUserVue}}</p>
      <p><b>User Name</b> {{user.name}}</p>
      <p><b>User Age</b> {{user.age}}</p>
      <p><b>User Email</b> {{user.email}}</p> -->
      <br>
      <p> v-html=""</p>   <!--с р не работает -->
  <div v-html="funcUserVue()"></div>
  
  </div>


</template>
<script>
import {} from './base/base.vue'         //от куда ты хочешь перенести данніе
export default {
  name: "functional",
  data: () => ({
    message:{text:'message date'},
    title: 'titel lorem',
    link: "https://google.com",
    textNumber: 10,
    user: {
      name:'pavel',
      age: 20,
      email: 'test@test.com'
    }
  }),
  // кнопка меняет цифру 
  computed: {},
  methods: {                           
    funcPlassNumber: function () {
      return this.textNumber++;
    },
    funcUserVue: function () {
      return ` 
      <p><b>User Name</b> ${this.user.name}</p>
      <p><b>User Age</b> ${this.user.age}</p>
      <p><b>User Email</b> ${this.user.email}</p>
      `
    }
  }
}
</script>
