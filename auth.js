// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
    import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
    } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAwVAYStY5smLwXY286H-GAsntgJ_2Q6yA",
    authDomain: "test-ef0cb.firebaseapp.com",
    projectId: "test-ef0cb",
    storageBucket: "test-ef0cb.firebasestorage.app",
    messagingSenderId: "750104848462",
    appId: "1:750104848462:web:60e66445bad5241dc0fb1f",
    measurementId: "G-2D3Z3XJJ1Y"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

  

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
});


document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) =>
      updateProfile(cred.user, { displayName: name })
    )
    .then(() => {
      alert("Account created!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
});
