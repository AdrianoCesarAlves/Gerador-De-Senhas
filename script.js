function gerarSenha(tamanho){
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let senha = "";
    for(let i = 0; i < tamanho; i++){
        const indexAleatorio = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[indexAleatorio];
    }

    return senha;
}


function copiarSenha() {
    const senha = document.getElementById('senha');
    senha.select();
    document.execCommand('copy');
    document.getElementById('mensagem').innerText = 'Senha copiada para a área de transferência!';
}

document.getElementById('gerar').addEventListener('click', function() {
    const tamanho = document.getElementById('tamanho').value;
    const senhaGerada = gerarSenha(tamanho);
    document.getElementById('senha').value = senhaGerada;
    document.getElementById('mensagem').innerText = '';
});

document.getElementById('copiar').addEventListener('click', copiarSenha);
