function validarLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;   

    console.log(usuario);
    console.log(senha);

    // if (usuario === '' && senha === '') {
        // alert('Preencha o campo usuario e senha !');
        // return false;
    // }

    if (usuario === '') {
        alert('Preencha o campo usuario !');
        return false;
    }
    if (senha === '') {
        alert('Preencha o campo senha !');
        return false;
    }

    if (senha.length < 8 ) {
        alert('Digite Senha com o minimo 8 caracteres');
        return true;
    }

    // if (usuario.includes('@') || usuario.includes('.com')) {
        // return true;
    // }
    Const regexUser = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-%+-]+\.[a-zA-z] {2,}$/
    if (!regexUser.test(usuario)) {
        alert('O e-mail do usuario esta invalido');
        return false;
    }

    console.log(usuario);
    console.log(senha);
}