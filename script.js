document.getElementById('form-agendamento').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    const numero = '5511958368306'; // DDD + número da podóloga
    const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar o serviço de *${servico}* para o dia ${data} às ${horario}.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});


