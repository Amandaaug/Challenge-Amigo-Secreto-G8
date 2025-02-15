# Desafio Amigo Secreto G8  

Bem-vindo ao repositório do **Desafio Amigo Secreto G8**! Este projeto é uma aplicação web que permite organizar e participar de um amigo secreto de forma simples e divertida.  

## Descrição  

Este projeto foi desenvolvido como parte de um desafio. O objetivo é criar uma plataforma onde os usuários possam se inscrever, sortear amigos secretos e interagir de maneira fácil.  

## Tecnologias Utilizadas  

- **HTML**: Estrutura básica da aplicação.  
- **CSS**: Estilização e layout.  
- **JavaScript**: Funcionalidades interativas.  

## Estrutura do Projeto  

- `index.html`: Página principal da aplicação.  
- `style.css`: Arquivo de estilos.  
- `app.js`: Lógica da aplicação.  

## Dificuldades Enfrentadas com JavaScript  

Durante o desenvolvimento do projeto, algumas dificuldades específicas relacionadas ao JavaScript foram identificadas:  

# Desafio Amigo Secreto G8  

Bem-vindo ao repositório do **Desafio Amigo Secreto G8**! Este projeto é uma aplicação web que permite organizar e participar de um amigo secreto de forma simples e divertida.  

## Descrição  

Este projeto foi desenvolvido como parte de um desafio e ainda está em fase de desenvolvimento. O objetivo é criar uma plataforma onde os usuários possam se inscrever, sortear amigos secretos e interagir de maneira fácil.  

## Tecnologias Utilizadas  

- **HTML**: Estrutura básica da aplicação.  
- **CSS**: Estilização e layout.  
- **JavaScript**: Funcionalidades interativas.  

## Estrutura do Projeto  

- `index.html`: Página principal da aplicação.  
- `style.css`: Arquivo de estilos.  
- `app.js`: Lógica da aplicação.  

## Dificuldades Enfrentadas com JavaScript  

Durante o desenvolvimento do projeto, algumas dificuldades específicas relacionadas ao JavaScript foram identificadas:  

1. **Implementação da Lógica de Sorteio**:  
   - Criar uma lógica que sorteie amigos secretos de forma justa e aleatória foi um desafio. É necessário garantir que cada participante não seja sorteado para si mesmo, o que requer um algoritmo cuidadoso.  
   - A função precisa agrupar os amigos participantes de forma que cada um tenha um amigo secreto sorteado. É necessário:
  * Criar um algoritmo que sorteie amigos de maneira aleatória e justa. Isso implica garantir que não haja duplicação.
    
2. **Manipulação do DOM**:  
   - A interação com o DOM para exibir os resultados do sorteio e atualizar a interface do usuário em tempo real apresentou dificuldades. A atualização dinâmica dos elementos HTML pode ser complexa, especialmente para iniciantes.  
   - Durante o processo de agregação, a lista de amigos deve ser manipulada de forma que suas identidades permaneçam ocultas até que o sorteio ocorra.
   - Armazenamento de Dados: Os dados de cada amigo devem ser armazenados em uma estrutura que permite acessá-los durante o sorteio, mas que não sejam expostos ao usuário até o momento apropriado.

3. **Validação de Dados**:  
   - Garantir que os dados inseridos pelos usuários (como nomes) sejam válidos e tratados corretamente é crucial. A validação de entradas e o tratamento de erros podem ser complicados, especialmente em um ambiente onde múltiplos usuários interagem.  
   - Ao adicionar amigos à lista, deve-se garantir que os elementos do DOM que contêm os nomes dos amigos não sejam visíveis até que o sorteio seja realizado. Isso pode ser feito manipulando o DOM após a agregação, escondendo elementos ou usando uma abordagem que armazene dados em memória (por exemplo, usando um array em JavaScript).

## Como Usar  

1. Clone o repositório:  
   ```bash  
   git clone https://github.com/Amandaaug/Challenge-Amigo-Secreto-G8.git
   
2. Navegue até o diretório do projeto:
   - cd Challenge-Amigo-Secreto-G8

3. Abra o arquivo index.html em seu navegador.   

 * Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de pull.

* Licença
Este projeto é de código aberto e pode ser utilizado e modificado conforme necessário.
