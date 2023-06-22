import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from './config/firebase'
const $ = document.getElementById.bind(document);

const onSubmitRegistrationForm = (event) => {
    event.preventDefault();
    const email = $('email').value;
    const passwd = $('password').value;
    const passwdConfirm = $('password-confirmation').value;
    console.log(passwd);
    if (passwd === passwdConfirm) {
        const auth = getAuth(firebaseApp)
        createUserWithEmailAndPassword(auth, email, passwd)
        .then(() => {
                    const resultPanel = $('result-panel');
                    const htmlContent = `
                        <span id="success-message"> Usuário cadastrado com sucesso! </span>

                        <a href="login.html" id="login-link"> Clique aqui para fazer login </a>
                    `
                    resultPanel.insertAdjacentHTML('beforeend', htmlContent);
                })
    }
}

$('register-form').onsubmit = onSubmitRegistrationForm;