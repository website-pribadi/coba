importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Inisialisasi Firebase di dalam Service Worker
const firebaseConfig = {
  apiKey: "AIzaSyDyNGIqto0Sk0UT1IzC-xgOV9sI71GrIu8",
  authDomain: "webchat-coba.firebaseapp.com",
  projectId: "webchat-coba",
  storageBucket: "webchat-coba.firebasestorage.app",
  messagingSenderId: "808219710650",
  appId: "1:808219710650:web:61320aa86fda4ce804de83",
  measurementId: "G-VEKM8LJRY1"
};

const messaging = firebase.messaging();

// Menangani background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Pesan diterima di latar belakang: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/chat.png' // Sesuaikan dengan ikon Anda
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});