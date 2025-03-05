let nomeSite = document.createElement('h1');
let mercadoria = document.createElement('h2');
const postagemovos = document.createElement('div');
let imagem = document.createElement('img')

nomeSite.textContent = 'Site do Ovo';
mercadoria.textContent = 'Compre quantos ovos quiser!!';
postagemovos.innerHTML = 
`<h3 class="post-vendas">Escolha aqui seus ovos</h3>

<li> 6 ovos</li>
<li> 12 ovos</li>
<li> 24 ovos</li>`
imagem.src = 'c:\Users\junio\Desktop\aula17-criar-elementos-no-dom\atividades\img\ovos-1024x681.jpg'

nomeSite.id = 'site-js';
mercadoria.id = 'merc-js';
imagem.alt = 'Imagem de ovos'
imagem.width = 300;
imagem.height = 200; 

let pontodeinsercao = document.body;

pontodeinsercao.appendChild(nomeSite);
pontodeinsercao.appendChild(mercadoria);
pontodeinsercao.appendChild(postagemovos);
pontodeinsercao.appendChild(imagem);
