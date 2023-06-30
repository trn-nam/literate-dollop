const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


const inputUsernameRegister = document.querySelector(".text");
const inputPasswordRegister = document.querySelector(".pass");
const inputEmailRegister = document.querySelector(".email")
const btnRegister = document.querySelector("button");
btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        inputUsernameRegister.value === "" ||
        inputEmailRegister.value ==="" ||
        inputPasswordRegister.value === ""
    ) {
        alert("vui lòng không để trống");
    } else {
        // array user
        const user = {
            username: inputUsernameRegister.value,
            email:inputEmailRegister.value,
            password: inputPasswordRegister.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(inputUsernameRegister.value, json);
        alert("Đăng Ký Thành Công");
    }
});

// const inputUsernameLogIn = document.querySelector(".email");
// const inputPasswordLogIn = document.querySelector(".pass");
// const btnLogIn = document.querySelector("button");
// btnRegister.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     inputUsernameLogIn.value === "" ||
//     inputPasswordLogIn.value === ""
//   ) {
//     alert("vui lòng không để trống");
//   } else {
//     // array user
//     const user = {
//       username: inputUsernameLogIn.value,
//       password: inputPasswordLogIn.value,
//     };
//     let json = JSON.stringify(user);
//     localStorage.setItem(inputUsernameLogIn.value, json);
//     alert("Đăng Ký Thành Công");
//   }
// });

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABj4f9Tvxuho8mF9CRbTzEKUQzUKYMskQ",
    authDomain: "fresh-start-3bfd7.firebaseapp.com",
    projectId: "fresh-start-3bfd7",
    storageBucket: "fresh-start-3bfd7.appspot.com",
    messagingSenderId: "933106216762",
    appId: "1:933106216762:web:41c65a5431f1fca4156a03",
    measurementId: "G-XNGH9HMGY3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth()

var text = document.getElementById("text")
var email = document.getElementById("email")
var password = document.getElementById("pass")


window.signup = function(e){
    var obj = {
        text:text.value,
        email:email.value,
        password:password.value
    }
    createUserWithEmailAndPassword(auth.obj.email,obj.password)
    .then(function(success){
        alert("sign up successfully")
    })
    .catch(function(err){
        alert("error" +err)
    })
    console.log(obj);
}
