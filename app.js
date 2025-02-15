let amigos = ['Flávio', 'Amanda', 'Sarah', 'João'];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o novo amigo à lista
    amigos.push(nomeAmigo);
    
    // Adiciona o novo amigo à lista exibida
    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);

    // Exibe a lista somente se houver amigos
    if (amigos.length > 0) {
        listaAmigos.style.display = 'block';
    }

    // Limpa o campo de entrada
    inputAmigo.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo Secreto: ${amigoSorteado}</li>`;
}
