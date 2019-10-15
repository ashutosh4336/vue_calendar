import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.useu(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDSnjHjB_TbNGJHXl1UQYWixlRQAY7WLX4',
  authDomain: 'vue-calendar-b03bd.firebaseapp.com',
  databaseURL: 'https://vue-calendar-b03bd.firebaseio.com',
  projectId: 'vue-calendar-b03bd',
  storageBucket: 'vue-calendar-b03bd.appspot.com',
  messagingSenderId: '150987976717',
  appId: '1:150987976717:web:6cb0728fd9a7a590716544'
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
