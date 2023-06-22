import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "./config/firebase";
const $ = document.getElementById.bind(document);

const onSubmitLogin = (event) => {
    event.preventDefault();
    const email = $('email').value;
    const pass = $('password').value;
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
         const user = userCredential.user
         const token = user.getIdToken();
         localStorage.setItem('token', token);
        const card = $('form-container');
        const content = `
        <p id='loginSuccess'>Usuário logado!</p>
`
        card.insertAdjacentHTML('afterend', content);
        window.location.href = './index.html';
        
    })

    .catch((error) => {
        alert('Usuário incorreto!')
    })
}

$('login-form').onsubmit = onSubmitLogin;