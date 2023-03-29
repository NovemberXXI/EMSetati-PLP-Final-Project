// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgV2t9RmEsWRawA1rx1pVD7k1xMKTKajg",
  authDomain: "book-me-a397d.firebaseapp.com",
  projectId: "book-me-a397d",
  storageBucket: "book-me-a397d.appspot.com",
  messagingSenderId: "1062805281172",
  appId: "1:1062805281172:web:b5ff513ce95a0f378e1781",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signinButton = document.querySelector("sign-up-btn");
const createAccountButton = document.querySelector("create-btn");
const emailInput = document.querySelector("email");
const passwordInput = document.querySelector("password");
const main = document.querySelector("sign-up");
const createAccount = document.querySelector("create-account");

const createEmailIn = document.querySelector("email-create");
const createEmailConfirmIn = document.querySelector("email-confirm");
const createPasswordlIn = document.querySelector("password-create");
const createPasswordConfiemIn = document.querySelector("password-confirm");

// vars

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignupPassword;

// sign in

signinButton.addEventListener("click", function () {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    window.alert("Successful log in");
    window.location = "../HTML/explore.html";
  });
});

createAccountButton.addEventListener("click", () => {
  main.style.display = "none";
  createAccount.style.display = "block";
});

// sign in

// toggle menu //
const hamburger = document.querySelector(".humburger");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("nav-links");
});
