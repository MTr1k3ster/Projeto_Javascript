const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const modalLogin = document.querySelector("#modal-login");
const modalRegister = document.querySelector("#modal-register");
const btnCancelLogin = document.querySelector("#btn-cancel-login");
const btnCancelRegister = document.querySelector("#btn-cancel-register");
 
function soma(num01,num02) {
    const somar = num01 + num02;
    console.log(somar);
}


// arrow function 
soma(8, 6)

const multiplicar = (num01, num02) => {
    return num01 * num02
}

console.log(multiplicar(5, 8.9));

const subtrair = (num01, num02) => {
    return num01 - num02 
} 

console.log(subtrair(5, 8.9));

// addEventListener => Escuta o evento de click 
// e executa a função 
btnLogin.addEventListener("click", (e) => {
    modalLogin.classList.remove("hide-modal");
    modalLogin.classList.add("show-modal");
})

btnRegister.addEventListener("click", (e) => {
  modalRegister.classList.add("hide-modal");
  modalRegister.classList.remove("show-modal");
})

btnCancelLogin.addEventListener("click", (e) =>{
    modalLogin.classList.add("hide-modal");
    modalLogin.classList.remove("show-modal");
})

btnCancelRegister.addEventListener("click", (e) =>{
    modalRegister.classList.add("show-modal");
    modalRegister.classList.remove("hide-modal");
})