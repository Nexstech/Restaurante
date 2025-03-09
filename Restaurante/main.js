function openReservaForm() {
    document.getElementById('reservaForm').style.display = 'flex'; // Exibe o formulário
}

// Função para fechar o formulário de reserva
function enviarWhatsApp(event) {
    event.preventDefault();  // Impede o envio normal do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dataReserva = document.getElementById('dataReserva').value;
    const horarioReserva = document.getElementById('horarioReserva').value;
    const mesaReserva = document.getElementById('mesaReserva').value;

    // Validação dos campos obrigatórios
    if (!nome || !email || !telefone || !dataReserva || !horarioReserva || !mesaReserva) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Formata a mensagem
    const mensagem = `*Reserva de Mesa*\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nData da Reserva: ${dataReserva}\nHorário: ${horarioReserva}\nMesa: ${mesaReserva}`;

    // Substitua o número abaixo pelo número de WhatsApp do estabelecimento (com código de país)
    const numeroWhatsApp = '55xxxxxxxxxxx'; // Exemplo: 55 para Brasil e o número do WhatsApp

    // Cria a URL para enviar a mensagem via WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp
    window.open(url, '_blank');
}
const stars = document.querySelectorAll('.star');
let selectedValue = 0;

// Função para destacar as estrelas ao passar o mouse
stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const value = star.getAttribute('data-value');
        highlightStars(value);
    });

    star.addEventListener('mouseout', () => {
        if (selectedValue === 0) {
            resetStars();
        } else {
            highlightStars(selectedValue);
        }
    });

    star.addEventListener('click', () => {
        selectedValue = star.getAttribute('data-value');
        highlightStars(selectedValue);
    });
});

// Função para destacar as estrelas
function highlightStars(value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('highlighted');
        } else {
            star.classList.remove('highlighted');
        }
    });
}

// Função para resetar as estrelas (caso o mouse saia sem selecionar)
function resetStars() {
    stars.forEach(star => {
        star.classList.remove('highlighted');
    });
}

// Função para enviar a avaliação via WhatsApp
function enviarAvaliacao() {
    if (selectedValue === 0) {
        alert("Por favor, selecione uma avaliação de 1 a 5 estrelas.");
        return;
    }

    const avaliacaoMensagem = `Avaliação: ${selectedValue} Estrelas`;
    const whatsappLink = `https://wa.me/5511912345678?text=${encodeURIComponent(avaliacaoMensagem)}`;
    
    window.open(whatsappLink, '_blank');
} 