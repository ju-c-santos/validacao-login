const escolha = document.querySelector('#escolhaUsuario') ///pegar o item selecionado

const usuario = document.getElementById('usuario') 
const senha = document.getElementById('senha')
const verSenha = document.getElementById('imagem')


const forms = document.getElementById('conteudo'); // formulario em que está o conteudo

let views = false


escolha.addEventListener("change", (evt) => { //mostrar o item selecionado no console
    escolhaLogin = evt.target.value;
    const msgError = document.getElementById('userError');
    msgError.style.display = 'none';

    //console.log(escolhaLogin);

    if(escolhaLogin === 'email'){
        usuario.placeholder = 'email';
        ///validação do email
        usuario.addEventListener('input', (evt) => {
            //console.log(usuario.value);

            if (usuario.value.includes('@' && '.com')){
                msgError.innerHTML = '';
                msgError.style.display = 'none';
                //console.log('tem o arroba')

            } else if (escolhaLogin === 'nickname'){ // é pra nao da erro de validar o nickname
                msgError.innerHTML = '';
                msgError.style.display = 'none';
                usuario.placeholder = 'nickname';
                //console.log('nao é imail')
            } else {
                msgError.style.display = 'block';
                msgError.innerHTML = 'o e-mail deve possuir <strong>@</strong> e <strong>.com</strong>.'
            }


        }) 

    }

    usuario.addEventListener('blur', (disfoco) =>{
        msgError.innerHTML = '';
        msgError.style.display = 'none';
        //console.log('desfocado')
    })


})

///viasualizar senha
verSenha.addEventListener('click', (ver) => {

    if (views == false){
        verSenha.src = 'img/hide.png'
        senha.type = 'text';
        //console.log('da pra ve')
        views = true;

    } else {
        verSenha.src = 'img/view.png'
        senha.type = 'password';
        //console.log('nao da pra ve')
        views = false;
    }


})


/// senha evento blur
senha.addEventListener('blur', (senhaV) => {
   


    
})


///subimit 
forms.addEventListener('submit', (enviar) => {
    enviar.preventDefault();

    //console.log('enviando')

    if (usuario.value.length == 0){
        window.alert('usuario vazio')
    } else if (senha.value.length == 0){
        window.alert('faltando a senha')
    } else {
        window.alert('enviando fomulario...')
    }



})