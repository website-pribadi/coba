importScripts('https://www.gstatic.com/firebasejs/9.x.x/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.x.x/firebase-messaging-compat.js');

// Ganti konfigurasi ini dengan milik project Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyDyNGIqto0Sk0UT1IzC-xgOV9sI71GrIu8",
  authDomain: "webchat-coba.firebaseapp.com",
  projectId: "webchat-coba",
  storageBucket: "webchat-coba.firebasestorage.app",
  messagingSenderId: "808219710650",
  appId: "1:808219710650:web:61320aa86fda4ce804de83",
  measurementId: "G-VEKM8LJRY1"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Menangani notifikasi saat aplikasi di background
messaging.onBackgroundMessage((payload) => {
  console.log('Pesan background diterima: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'chat.png' // Ganti dengan path icon Anda
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});