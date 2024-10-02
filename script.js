document.getElementById('doar-btn').addEventListener('click', function() {
    const qrSection = document.getElementById('qr-code-section');
    // Exibe ou esconde a seção do QR Code
    if (qrSection.style.display === 'none') {
        qrSection.style.display = 'block';
    } else {
        qrSection.style.display = 'none';
    }
});

// Função para copiar a chave PIX
function copyPixKey() {
    const pixKey = '46758343880'; // Chave PIX que será copiada
    navigator.clipboard.writeText(pixKey)
        .then(() => {
            alert('Chave PIX copiada: ' + pixKey);
        })
        .catch(err => {
            console.error('Erro ao copiar a chave PIX: ', err);
        });
}
