const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
  {
    titulo: "McDonalds",
    subtitulo: "Amo muito tudo isso",
    data: "30/08/2023",
    texto: "Sua tia com toda certeza já disse que a carne é feita de minhoca"
  },
  {
    titulo: "Burguer King",
    subtitulo: "Melhor que McDonalds?",
    data: "30/08/2022",
    texto: "O Mc Donalds dos esfomeados"
  },
  {
    titulo: "KFC",
    subtitulo: "Inventou o frango de tão antigo que é",
    data: "30/08/2022",
    texto: "Não tem mais frango apimentado, saudades"
  },
  {
    titulo: "Mania de Churrasco",
    subtitulo: "O fastfood do churrasco",
    data: "30/08/2022",
    texto: "Nem vende tanto churrasco assim"
  },
  {
    titulo: "TacoBell",
    subtitulo: "O mais mexicano",
    data: "30/08/2022",
    texto: "Um taco mexicano gourmetizado"
  },
  {
    titulo: "Outback",
    subtitulo: "A comida australiana mas não tão autraliana assim",
    data: "30/08/2022",
    texto: "Extremamente caro"
  },
  {
    titulo: "Giraffas",
    subtitulo: "O melhor prato do mundo",
    data: "30/08/2022",
    texto: "A melhor experiência de um PF da sua vida"
  },
];


//for(let i = 0; i < arrayPostagens.length; i ++) {} essa é uma forma mais antiga de usar, a forma mais fácil e simples é a baixo (estrutura de repetição)

arrayPostagens.forEach(function(post){//Etapa 1: Criar elemento

  const novoPost = document.createElement('article');
  
  novoPost.setAttribute('id', 'Post-2');
  
  console.log(novoPost)
  
  //Etapa 2: Manipular elemento dentro do array eu estou acessando a informação que tem no index.html pelo nome do array.
  
  novoPost.innerHTML = `<h3>${post.titulo}</h3>
  <p class="subtitulo">${post.subtitulo}</p>
  <div class="data">${post.data}</div>
  <p>${post.texto}</p>
  `;
  //Etapa 3: Adicionar o dom
  
  const elementoMain = document.querySelector('main');
  
  elementoMain.appendChild(novoPost);
})
