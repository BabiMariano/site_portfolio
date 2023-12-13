document.addEventListener('DOMContentLoaded', function () {
    // Seu e-mail para contato
    const emailContato = 'bmariano2902@outlook.com';

    // Selecionar o botão
    const btnCopiarEmail = document.getElementById('email');

    // Adicionar evento de clique
    btnCopiarEmail.addEventListener('click', function () {
        // Criar um elemento de texto temporário
        const tempInput = document.createElement('input');
        tempInput.value = emailContato;

        // Adicionar o elemento à página
        document.body.appendChild(tempInput);

        // Selecionar e copiar o texto
        tempInput.select();
        document.execCommand('copy');

        // Remover o elemento temporário
        document.body.removeChild(tempInput);

        // Mensagem indicando que o e-mail foi copiado (opcional)
        alert('E-mail copiado para a sua área de transferência: ' + emailContato);
    });
});