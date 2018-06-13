
importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase.js');
// Initialize Firebase
const config = {
  messagingSenderId: "982751317574"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
