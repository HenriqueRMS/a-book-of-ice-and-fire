var btnMobile = document.getElementById('btn-mobile');

function mostrarMenu(){
    var nav = document.getElementById('nav-bar');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', mostrarMenu);

function trocar(){

    if (document.querySelector('body').classList.contains('preto')){
            document.querySelector('body').classList.remove('preto');
            document.querySelector('body').classList.add('branco');

            document.querySelector('footer').classList.remove('preto');
            document.querySelector('footer').classList.add('branco');
            
            document.querySelector('header').classList.remove('preto');
            document.querySelector('header').classList.add('branco');
            
        }
    else{
        document.querySelector('body').classList.remove('branco');
        document.querySelector('body').classList.add('preto');
       

        document.querySelector('footer').classList.remove('branco');
        document.querySelector('footer').classList.add('preto');

        document.querySelector('header').classList.remove('branco');
        document.querySelector('header').classList.add('preto');
        
        }
}